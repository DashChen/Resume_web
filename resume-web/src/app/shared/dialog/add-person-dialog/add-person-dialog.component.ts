import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormErrorStateMatcher } from '@app/core';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { ResumeDialogData } from '@app/admin/pages/resume-invitations/components/resume-invitation-list/resume-invitation-list.component';
import { ResumeData } from '@app/core/datas';
import { Store } from '@ngrx/store';
import { Actions as CommonActions, Selectors as CommonSelectors } from '@app/shared/store/common';
import { ResumeShareCodesShareCodeDto } from '@app/core/models/Api';

@Component({
  selector: 'app-add-person-dialog',
  templateUrl: './add-person-dialog.component.html',
  styleUrls: ['./add-person-dialog.component.scss']
})
export class AddPersonDialogComponent implements OnInit {
  matcher = new FormErrorStateMatcher();
  isSuccess: boolean = false;

  jobOptions: ISelectOption[] = [];
  stageOptions: ISelectOption[] = [];
  stageList: ResumeShareCodesShareCodeDto[] = [];

  addForm = new FormGroup({
    name: new FormControl(this.data.item.name, [Validators.required, Validators.pattern('[\\W]+')]),
    phone: new FormControl(this.data.item.phone, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(9),
      Validators.maxLength(13)
    ]),
    idno: new FormControl(this.data.item?.accountCode, [Validators.pattern('^[A-Z]{1}[1-2]{1}[0-9]{8}$')]),
    email: new FormControl(this.data.item.email, [Validators.required, Validators.email]),
    jobName: new FormControl(this.data.item.jobName, [Validators.required]),
    stage: new FormControl(this.data.item.stage, [Validators.required])
  });

  get nameFormCtl() {
    return this.addForm.get('name') as FormControl;
  }

  get phoneFormCtl() {
    return this.addForm.get('phone') as FormControl;
  }

  get idnoFormCtl() {
    return this.addForm.get('idno') as FormControl;
  }

  get emailFormCtl() {
    return this.addForm.get('email') as FormControl;
  }

  get jobNameFormCtl() {
    return this.addForm.get('jobName') as FormControl;
  }

  get stageFormCtl() {
    return this.addForm.get('stage') as FormControl;
  }

  getNameErrorMessage() {
    if (this.nameFormCtl.getError('required')) {
      return '請填寫此欄位';
    }
    return this.nameFormCtl.hasError('pattern') ? '格式不正確，例:王大明' : '';
  }

  getPhoneErrorMessage() {
    if (this.phoneFormCtl.getError('required')) {
      return '請填寫此欄位';
    }
    return '手機號碼格式錯誤';
  }

  getIdnoErrorMessage() {
    return this.idnoFormCtl.getError('pattern') ? '身分證格式錯誤' : '';
  }

  getEmailErrorMessage() {
    if (this.emailFormCtl.hasError('required')) {
      return '請填寫此欄位'
    }
    return this.emailFormCtl.hasError('email') ? '格式不正確，例:WaDaMing@gmail.com' : '';
  }

  getJobNameErrorMessage() {
    return this.jobNameFormCtl.getError('required') ? '請選擇項目' : '';
  }

  getStageErrorMessage() {
    return this.stageFormCtl.getError('required') ? '請選擇項目' : '';
  }

  constructor(
    public store: Store,
    public dialogRef: MatDialogRef<AddPersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResumeDialogData,
  ) {
    this.jobOptions = data.jobOptions;
  }

  ngOnInit(): void {
    // 取回人員階段
    this.store.select(CommonSelectors.selectStageList).subscribe(res => {
      this.stageList = res;
      this.stageOptions = res.map(item => ({text: item.name, key: item.code} as ISelectOption));
    });
  }

  confirm() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? {...this.addForm.value} : false);
  }
}

