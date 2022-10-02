import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '@app/core';

import { ResumeData } from '@app/core/datas';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { ApiConfig, ResumeResumeInvitationsResumeInvitationDto } from '@app/core/models/Api';
import { BaseFormComponent } from '@app/shared/components/base-form.component';
import { BaseComponent } from '@app/shared/components/base.component';
import { catchError, finalize, from, takeUntil, throwError } from 'rxjs';
import { ReceiverDialogData } from '../../components/resume-invitation-send-form/resume-invitation-send-form.component';

interface CheckResumeResumeInvitationsResumeInvitationDto extends ResumeResumeInvitationsResumeInvitationDto {
  checked: boolean;
}

@Component({
  selector: 'admin-resume-invitation-send-add-dialog',
  templateUrl: './resume-invitation-send-add-dialog.component.html',
  styleUrls: ['./resume-invitation-send-add-dialog.component.scss']
})
export class ResumeInvitationSendAddDialogComponent extends BaseFormComponent implements OnInit {

  isSuccess: boolean = false;
  stageOptions: ISelectOption[] = [];
  personList: CheckResumeResumeInvitationsResumeInvitationDto[] = [];

  searchForm = new FormGroup({
    name: new FormControl(''),
    stage: new FormControl(null),
  });

  get nameFormCtl() {
    return this.searchForm.get('name') as FormControl;
  }
  get stageFormCtl() {
    return this.searchForm.get('stage') as FormControl;
  }

  constructor(
    private dataService: DataService<ApiConfig>,
    public dialogRef: MatDialogRef<ResumeInvitationSendAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReceiverDialogData,
  ) {
    super();
    this.stageOptions = data.stageOptions;
  }

  ngOnInit(): void {
  }

  search(event: MouseEvent) {
    const requestHttp$ = from(
      this.dataService.api.appResumeInvitationsList({
        Stage: this.stageFormCtl.value,
        Name: this.nameFormCtl.value,
      }, {
        headers: {
          ...this.dataService.getAuthorizationToken('admin')
        }
      })
    ).pipe(
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
      }),
      finalize(() => {
        requestHttp$.unsubscribe();
      }),
      takeUntil(this.destroy$)
    ).subscribe(
      (res) => {
        console.log('search person', res);
        this.personList = res.data.items?.map(item => {
          return {
            ...item,
            checked: false
          } as CheckResumeResumeInvitationsResumeInvitationDto
        }) || [];
      },
      (err) => {
        console.log('appResumeInvitationsList', err);
      }
    );
  }

  confirm() {
    if (this.searchForm.invalid) {
      console.log(this.searchForm);
      this.searchForm.markAllAsTouched();
      return;
    }
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? this.personList.filter(item => item.checked) : false);
  }

}
