import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
import { DataService } from '@app/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions as RouterActions } from '@app/shared/store/router';
import { DateTime } from 'luxon';

export interface ReceiverDialogData extends basicDialog {
  stageOptions: ISelectOption[];
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

  showPersonErr: boolean = false;

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

  get date2FormCtl() {
    return this.editForm.get('date2') as FormControl;
  }

  get date3FormCtl() {
    return this.editForm.get('date3') as FormControl;
  }

  get sendDateTypeFormCtl() {
    return this.editForm.get('sendDateType') as FormControl;
  }

  get emailTitleFormCtl() {
    return this.editForm.get('emailTitle') as FormControl;
  }

  get emailContentFormCtl() {
    return this.editForm.get('emailContent') as FormControl;
  }

  get mailContentFormCtl() {
    return this.editForm.get('mailContent') as FormControl;
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
        stageOptions: this.stageOptions
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        // todo: 新增人員
        this.selectedPerson = result;
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

    const requestList: Observable<any>[] = [];
    // 有選信件樣板送信件
    if (this.mailTplFormCtl.value) {
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
        requestList$.unsubscribe();
      }),
      takeUntil(this.destroy$)
    ).subscribe((res) => {
      console.log(res);
    });
  }

}
