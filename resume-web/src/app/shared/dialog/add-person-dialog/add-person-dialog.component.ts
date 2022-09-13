import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormErrorStateMatcher } from '@app/core';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { ResumeDialogData } from '@app/admin/pages/resume-invitation-list/resume-invitation-list.component';
import { ResumeData } from '@app/core/datas';

@Component({
  selector: 'app-add-person-dialog',
  templateUrl: './add-person-dialog.component.html',
  styleUrls: ['./add-person-dialog.component.scss']
})
export class AddPersonDialogComponent implements OnInit {
  matcher = new FormErrorStateMatcher();
  isSuccess: boolean = false;

  jobOptions: ISelectOption[] = [
    { text: '行銷小編', key: 'sm' },
    { text: '業務助理', key: 'as' }
  ];
  levelOptions: ISelectOption[] = [
    { text: '第一階段', key: '1' },
    { text: '第二階端', key: '2' }
  ];

  addForm = new FormGroup({
    name: new FormControl(this.data.item?.name, [Validators.required, Validators.pattern('[\\W]+')]),
    mobile: new FormControl(this.data.item?.mobile, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(9),
      Validators.maxLength(13)
    ]),
    identityId: new FormControl(this.data.item?.identityId, [Validators.pattern('^[A-Z]{1}[1-2]{1}[0-9]{8}$')]),
    email: new FormControl(this.data.item?.email, [Validators.required, Validators.email]),
    job: new FormControl(this.data.item?.job),
    level: new FormControl(this.data.item?.level)
  });

  get nameFormCtl() {
    return this.addForm.get('name') as FormControl;
  }

  get mobileFormCtl() {
    return this.addForm.get('mobile') as FormControl;
  }

  get identityIdFormCtl() {
    return this.addForm.get('identityId') as FormControl;
  }

  get emailFormCtl() {
    return this.addForm.get('email') as FormControl;
  }

  get jobFormCtl() {
    return this.addForm.get('job') as FormControl;
  }

  get levelFormCtl() {
    return this.addForm.get('level') as FormControl;
  }

  getNameErrorMessage() {
    if (this.nameFormCtl.getError('required')) {
      return '請填寫此欄位';
    }
    return this.nameFormCtl.hasError('pattern') ? '格式不正確，例:王大明' : '';
  }

  getMobileErrorMessage() {
    if (this.mobileFormCtl.getError('required')) {
      return '請填寫此欄位';
    }
    return '手機號碼格式錯誤';
  }

  getIdentityIdErrorMessage() {
    return this.identityIdFormCtl.getError('pattern') ? '身分證格式錯誤' : '';
  }

  getEmailErrorMessage() {
    if (this.emailFormCtl.hasError('required')) {
      return '請填寫此欄位'
    }
    return this.emailFormCtl.hasError('email') ? '格式不正確，例:WaDaMing@gmail.com' : '';
  }

  getJobErrorMessage() {
    return this.jobFormCtl.getError('required') ? '請選擇項目' : '';
  }

  getLevelErrorMessage() {
    return this.levelFormCtl.getError('required') ? '請選擇項目' : '';
  }

  constructor(
    public dialogRef: MatDialogRef<AddPersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResumeDialogData,
  ) { }

  ngOnInit(): void {}

  confirm() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      this.jobFormCtl.setValidators([Validators.required]);
      this.jobFormCtl.updateValueAndValidity({ onlySelf: true });
      this.levelFormCtl.setValidators([Validators.required]);
      this.levelFormCtl.updateValueAndValidity({ onlySelf: true });
      return;
    }
    this.isSuccess = true;
    this.closeDialog();
  }

  closeDialog() {
    const passData = Object.assign({}, this.data.item) as ResumeData;
    passData.name = this.nameFormCtl.value;
    passData.mobile = this.mobileFormCtl.value;
    passData.identityId = this.identityIdFormCtl.value;
    passData.email = this.emailFormCtl.value;
    passData.job = this.jobFormCtl.value;
    passData.level = this.levelFormCtl.value;
    this.dialogRef.close(this.isSuccess ? passData : false);
  }
}

