import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { catchError, filter, finalize, forkJoin, from, Observable, of, Subscription, take, takeUntil, throwError } from 'rxjs';

import { basicDialog } from '@app/core/interfaces/basic-dialog';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { BaseComponent } from '@app/shared';
import { ResumeInvitationSendAddDialogComponent } from '@app/admin/pages/resume-invitations/dialogs/resume-invitation-send-add-dialog/resume-invitation-send-add-dialog.component';
import { ResumeInvitationService } from '../../..';
import { Store } from '@ngrx/store';
import { ApiConfig, ResumeMailTplsMailTplDto, ResumeResumeInvitationsResumeInvitationDto, ResumeShareCodesShareCodeDto, ResumeSMSTplsSMSTplDto } from '@app/core/models/Api';
import { Actions as CommonActions, Selectors as CommonSelectors } from '@app/shared/store/common';
import { Selectors as AdminSelectors } from '@app/shared/store/admin';
import { DataService } from '@app/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions as RouterActions } from '@app/shared/store/router';
import { DateTime } from 'luxon';

export interface ReceiverDialogData extends basicDialog {
  stageOptions: ISelectOption[];
  selectedPerson: ResumeResumeInvitationsResumeInvitationDto[];
}

@Component({
  selector: 'admin-resume-invitation-send-form',
  templateUrl: './resume-invitation-send-form.component.html',
  styleUrls: ['./resume-invitation-send-form.component.scss']
})
export class ResumeInvitationSendFormComponent extends BaseComponent implements OnInit, OnDestroy {

  override dialogConfig: ReceiverDialogData = {} as ReceiverDialogData;

  // 信件樣板
  mailTpls$ = this.store.select(CommonSelectors.selectMailTpls);
  mailList: ResumeMailTplsMailTplDto[] = [];
  mailOptions: ISelectOption[] = [];
  // 簡訊樣板
  smsTpls$ = this.store.select(CommonSelectors.selectSmsTpls);
  smsList: ResumeSMSTplsSMSTplDto[] = [];
  smsOptions: ISelectOption[] = [];

  stageTpls$ = this.store.select(CommonSelectors.selectStageList);
  stageList: ResumeShareCodesShareCodeDto[] = [];
  stageOptions: ISelectOption[] = [];
  selectedPerson: ResumeResumeInvitationsResumeInvitationDto[] = [];

  tabSelected = new FormControl(0);

  showPersonErr: boolean = false;
  showTemplateErr: boolean = false;

  editForm = new FormGroup({
    mailTpl: new FormControl(null),
    smsTpl: new FormControl(null),
    send_Date: new FormControl(''),
    date2: new FormControl(''),
    date3: new FormControl(''),
    sendDateType: new FormControl(''),
    emailTitle: new FormControl(''),
    emailContent: new FormControl(''),
    mailContent: new FormControl(''),
  });

  get mailTplFormCtl() {
    return this.editForm.get('mailTpl') as FormControl;
  }

  get smsTplFormCtl() {
    return this.editForm.get('smsTpl') as FormControl;
  }

  get sendDateFormCtl() {
    return this.editForm.get('send_Date') as FormControl;
  }

  getSendDateErrorMessage() {
    return this.date2FormCtl.hasError('sendDateFormCtl') ? '請填此欄位' : '';
  }

  get date2FormCtl() {
    return this.editForm.get('date2') as FormControl;
  }

  getDate2ErrorMessage() {
    return this.date2FormCtl.hasError('required') ? '請填此欄位' : '';
  }

  get date3FormCtl() {
    return this.editForm.get('date3') as FormControl;
  }

  getDate3ErrorMessage() {
    return this.date3FormCtl.hasError('required') ? '請填此欄位' : '';
  }

  get sendDateTypeFormCtl() {
    return this.editForm.get('sendDateType') as FormControl;
  }

  getSendDateTypeErrorMessage() {
    return this.sendDateTypeFormCtl.hasError('required') ? '請選擇發送類型' : '';
  }

  get emailTitleFormCtl() {
    return this.editForm.get('emailTitle') as FormControl;
  }

  getEmailTitleErrorMessage() {
    return this.emailTitleFormCtl.hasError('required') ? '請填此欄位' : '';
  }

  get emailContentFormCtl() {
    return this.editForm.get('emailContent') as FormControl;
  }

  getEmailContentErrorMessage() {
    return this.emailContentFormCtl.hasError('required') ? '請填此欄位' : '';
  }

  get mailContentFormCtl() {
    return this.editForm.get('mailContent') as FormControl;
  }

  getMailContentErrorMessage() {
    return this.mailContentFormCtl.hasError('required') ? '請填此欄位' : '';
  }

  constructor(
    public override store: Store,
    public override dialog: MatDialog,
    private dataService: DataService<ApiConfig>,
    private resumeInvitationService: ResumeInvitationService,
  ) {
    super(store, dialog);
  }

  ngOnInit(): void {
    this.mailTpls$.subscribe(list => {
      this.mailList = list || [];
      this.mailOptions = this.mailList.map(item => {
        return {
          text: item.name,
          key: item.code,
        } as ISelectOption;
      });
    });
    this.smsTpls$.subscribe(list => {
      this.smsList = list || [];
      this.smsOptions = this.smsList.map(item => {
        return {
          text: item.name,
          key: item.code,
        } as ISelectOption;
      });
    });
    this.stageTpls$.pipe(
      filter(res => Array.isArray(res) && res.length > 0),
      take(1),
      takeUntil(this.destroy$)
    ).subscribe(list => {
      console.log('getStageList', list);
      this.stageList = list || [];
      this.stageOptions = list.map(item => ({text: item.name, key: item.code} as ISelectOption));
    });
    this.sendDateTypeFormCtl.valueChanges.subscribe(type => {
      if (type === 'none') {
        this.date3FormCtl.clearValidators();
      } else {
        this.date3FormCtl.addValidators([Validators.required]);
      }
      this.date2FormCtl.updateValueAndValidity();
    });
    this.mailTplFormCtl.valueChanges.subscribe(val => {
      this.showTemplateErr = !val && !this.smsTplFormCtl.value;
    });
    this.smsTplFormCtl.valueChanges.subscribe(val => {
      this.showTemplateErr = !val && !this.mailTplFormCtl.value;
    });
    this.store.select(AdminSelectors.selectResumePerson).subscribe(selectedPersion => {
      this.selectedPerson = selectedPersion;
    });
  }


  showSendMsg(show: boolean) {
    this.store.dispatch(RouterActions.Go({
      path: ['/admin/resume-invitation']
    }));
  }

  addReceiver() {
    this.dialogConfig.title = '新增人員';
    this.dialogConfig.successBtnText = '確認';
    this.dialogConfig.cancelBtnText = '取消';
    const dialogRef = this.dialog.open(ResumeInvitationSendAddDialogComponent, {
      width: '100%',
      maxWidth: '614px',
      data: {
        ...this.dialogConfig,
        stageOptions: this.stageOptions,
        selectedPerson: this.selectedPerson || []
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // todo: 新增人員
        if (Array.isArray(result)) {
          result.forEach(_item => {
            const index = this.selectedPerson.findIndex(person => person.id === _item.id);
            if (index < 0) {
              this.selectedPerson.push(_item);
            }
          });
        }
        this.showPersonErr = this.selectedPerson.length === 0;
      }
    });
  }

  removeSelectedPerson(index: number, person: ResumeResumeInvitationsResumeInvitationDto) {
    console.log('removeSelectedPerson', person);
    this.selectedPerson.splice(index, 1);
  }

  cancelSend() {
    this.store.dispatch(RouterActions.Go({
      path: ['/admin/resume-invitation']
    }));
  }

  sendMessage() {
    if (this.selectedPerson.length === 0) {
      this.showPersonErr = true;
      return;
    }
    if (!this.mailTplFormCtl.value && !this.smsTplFormCtl.value) {
      this.showTemplateErr = true;
      return;
    }
    if (!this.sendDateTypeFormCtl.value) {
      this.sendDateTypeFormCtl.setValidators([Validators.required]);
      this.sendDateTypeFormCtl.updateValueAndValidity();
      return;
    }

    if (!this.date2FormCtl.value) {
      this.date2FormCtl.setValidators([Validators.required]);
      this.date2FormCtl.updateValueAndValidity();
      return;
    }

    if (!this.date3FormCtl.value) {
      this.date3FormCtl.setValidators([Validators.required]);
      this.date3FormCtl.updateValueAndValidity();
      return;
    }

    const requestList: Observable<any>[] = [];
    // 有選信件樣板送信件
    if (this.mailTplFormCtl.value) {
      this.emailTitleFormCtl.setValidators([Validators.required]);
      this.emailTitleFormCtl.updateValueAndValidity();
      this.emailContentFormCtl.setValidators([Validators.required]);
      this.emailContentFormCtl.updateValueAndValidity();
      if (this.emailTitleFormCtl.invalid || this.emailContentFormCtl.invalid) {
        this.tabSelected.setValue(0);
        return;
      }

      this.selectedPerson.forEach(person => {
        requestList.push(of(this.dataService.api.appMailQuenesCreate({
          systemCode: 'Resume',
          code: person.id,
          subject: this.emailTitleFormCtl.value,
          body: this.emailContentFormCtl.value,
          send_Date: this.sendDateTypeFormCtl.value === 'none' ? DateTime.now().toISO() : DateTime.fromISO(this.sendDateFormCtl.value).toISO(),
          companyId: person.companyId || '',
          resumeCode: '',
          dateA: this.date2FormCtl.value,
          dateD: this.date3FormCtl.value,
        }, {
          headers: {
            ...this.dataService.getAuthorizationToken('admin')
          }
        })));
      });
    }
    // 有選簡訊樣板送簡訊
    if (this.smsTplFormCtl.value) {
      this.mailContentFormCtl.setValidators([Validators.required]);
      this.mailContentFormCtl.updateValueAndValidity();
      if (this.mailContentFormCtl.invalid) {
        this.tabSelected.setValue(1);
        return;
      }

      this.selectedPerson.forEach(person => {
        requestList.push(of(this.dataService.api.appSMSQuenesCreate({
          systemCode: 'Resume',
          code: person.id || '',
          companyId: person.companyId || '',
          dateB: this.date2FormCtl.value,
          dateD: this.date3FormCtl.value,
          send_Date: this.sendDateTypeFormCtl.value === 'none' ? DateTime.now().toISO() : DateTime.fromISO(this.sendDateFormCtl.value).toISO(),
          body: this.mailContentFormCtl.value,
        }, {
          headers: {
            ...this.dataService.getAuthorizationToken('admin')
          }
        })));
      });
    }
    const requestList$ = forkJoin(requestList).pipe(
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
      }),
      finalize(() => {
        this.editForm.reset();
        this.editForm.setValue({
          mailTpl: null,
          smsTpl: null,
          send_Date: '',
          date2: '',
          date3: '',
          sendDateType: '',
          emailTitle: '',
          emailContent: '',
          mailContent: '',
        });
        this.selectedPerson = [];
        const title = '信件/簡訊已發送';
        const dialogRef = this.successDialog(title, '', '返回列表');
        dialogRef.afterClosed().subscribe(() => {
          this.showSendMsg(false);
          requestList$.unsubscribe();
        });
      }),
      takeUntil(this.destroy$)
    ).subscribe((res) => {
      console.log(res);
    });
  }

}
