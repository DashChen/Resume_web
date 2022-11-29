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
import { COUNTRY_TOKEN } from '@app/app.module';
import { ICountry } from '@app/core/interfaces/country';

@Component({
  selector: 'admin-resume-add-person-dialog',
  templateUrl: './resume-add-person-dialog.component.html',
  styleUrls: ['./resume-add-person-dialog.component.scss']
})
export class ResumeAddPersonDialogComponent implements OnInit {
  matcher = new FormErrorStateMatcher();
  isSuccess: boolean = false;

  countryCodeOptions: ISelectOption[] = [];
  jobOptions: ISelectOption[] = [];
  stageOptions: ISelectOption[] = [];
  stageList: ResumeShareCodesShareCodeDto[] = [];

  addForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\u2F00-\u2FD5|\u4E00-\u9FFF]{2,30}$/gm)
    ]),
    countryCode: new FormControl('TW', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9\-]{9,15}'),
    ]),
    idno: new FormControl('', [
      Validators.pattern('^[A-Z]{1}[1-2]{1}[0-9]{8}$')
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    jobName: new FormControl('', [Validators.required]),
    stage: new FormControl('', [Validators.required])
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

  get countryCodeFormCtl() {
    return this.addForm.get('countryCode') as FormControl;
  }

  getCountryCodeErrorMessage() {
    if (this.countryCodeFormCtl.hasError('required')) {
      return '請選擇這個欄位';
    }
    return '';
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
    public dialogRef: MatDialogRef<ResumeAddPersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResumeDialogData,
    @Inject(COUNTRY_TOKEN) public countryObj: ICountry
  ) {
    Object.keys(countryObj.userinfo_country_code).forEach((value: string) => {
      this.countryCodeOptions.push({
        text: countryObj.userinfo_country_code[value].toString(),
        key: value
      })
    });
    this.jobOptions = data.jobOptions;
    if (this.data.item) {
      this.nameFormCtl.setValue(this.data.item.name || '');
      this.idnoFormCtl.setValue(this.data.item?.accountCode || '');
      this.emailFormCtl.setValue(this.data.item.email || '');
      this.jobNameFormCtl.setValue(this.data.item.jobName || '');
      this.stageFormCtl.setValue(this.data.item.stage || '');
      const phoneOjb = this.getPhoneFormat(data.item?.phone || '');
      this.countryCodeFormCtl.setValue(phoneOjb.code || 'TW');
      this.phoneFormCtl.setValue(phoneOjb.phone);
    }
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

  getPhoneFormat(phone: string) {
    if (!phone.startsWith('+')) {
      return {
        code: '',
        phone: phone
      };
    }
    // 判斷區域
    let countryCode = '';
    let purePhone = '';
    for (let code in this.countryObj.id_to_countrycode) {
      let codeStr = this.countryObj.id_to_countrycode[code].toString();
      if (phone.startsWith(codeStr)) {
        countryCode = code;
        purePhone = phone.substring(codeStr.length);
        break;
      }
    }

    return {
      code: countryCode,
      phone: purePhone
    };
  }

  closeDialog() {
    this.dialogRef.close(this.isSuccess ? {
      ...this.addForm.value,
      accountCode: this.idnoFormCtl.value,
      phone: this.countryObj.id_to_countrycode[this.countryCodeFormCtl.value].toString() + this.phoneFormCtl.value
    } : false);
  }
}
