import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Selectors as UserSelectors } from '@app/shared/store/user';
import { DateTime } from 'luxon';
import { BaseFormComponent } from '@app/shared/components/base-form.component';
import { ICountry } from '@app/core/interfaces/country';
import { COUNTRY_TOKEN } from '@app/app.module';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { idCardValidator, nameValidator } from '@app/core/validators';

@Component({
  selector: 'app-resume-invitation-basic-dialog',
  templateUrl: './resume-invitation-basic-dialog.component.html',
  styleUrls: ['./resume-invitation-basic-dialog.component.scss']
})
export class ResumeInvitationBasicDialogComponent extends BaseFormComponent implements OnInit {
  countryCodeOptions: ISelectOption[] = [];
  infoForm = new FormGroup({
    nameC: new FormControl('', [
      Validators.required,
      nameValidator(),
    ]),
    nameE: new FormControl('', [
      Validators.pattern('^[a-zA-Z \s]{2,50}$'),
      Validators.maxLength(50),
    ]),
    idNo: new FormControl('', [
      Validators.pattern('^[A-Z]{1}[1-2]{1}[0-9]{8}$'),
      idCardValidator(),
    ]),
    sexCode: new FormControl(null),
    birthDate: new FormControl(''),
    countryCode: new FormControl('TW', [Validators.required]),
    currentTel: new FormControl('', [Validators.pattern('[0-9\-]{9,15}')]),
    currentAdd: new FormControl(''),
    email: new FormControl('', [Validators.email]),
  });

  get nameCFormCtl() {
    return this.infoForm.get('nameC') as FormControl;
  }

  getNameCErrorMessage() {
    if (this.nameCFormCtl.hasError('required')) {
      return '請填寫此欄位'
    }
    // console.log('getNameErrorMessage', this.nameFormCtl.errors);
    if (this.nameCFormCtl.hasError('maxlength')) {
      return `長度最多${this.nameCFormCtl.getError('maxlength').maxLength}`;
    }
    return this.nameCFormCtl.hasError('name') ? '格式不正確，請輸入文字' : '';
  }

  get nameEFormCtl() {
    return this.infoForm.get('nameE') as FormControl;
  }

  getNameEErrorMessage() {
    if (this.nameEFormCtl.hasError('pattern')) {
      return '格式不正確，請輸入文字'
    }
    if (this.nameEFormCtl.hasError('maxlength')) {
      return `長度最多${this.nameEFormCtl.getError('maxlength').requiredLength}`;
    }
    return '';
  }

  get idNoFormCtl() {
    return this.infoForm.get('idNo') as FormControl;
  }

  getIdNoErrorMessage() {
    if (this.idNoFormCtl.hasError('pattern') || this.idNoFormCtl.hasError('idCard')) {
      return '格式不正確，需有一個英文字母及9位數';
    }

    return '';
  }

  get sexCodeFormCtl() {
    return this.infoForm.get('sexCode') as FormControl;
  }

  getsexCodeErrorMessage() {
    if (this.sexCodeFormCtl.hasError('required')) {
      return '請選擇性別'
    }
    return '';
  }

  get birthDateFormCtl() {
    return this.infoForm.get('birthDate') as FormControl;
  }

  get countryCodeFormCtl() {
    return this.infoForm.get('countryCode') as FormControl;
  }

  getCountryCodeErrorMessage() {
    if (this.countryCodeFormCtl.hasError('required')) {
      return '請選擇這個欄位';
    }
    return '';
  }

  get currentTelFormCtl() {
    return this.infoForm.get('currentTel') as FormControl;
  }

  getCurrentTelErrorMessage() {
    return this.currentTelFormCtl.hasError('pattern') ? '格式不正確，例:02-12345678' : '';
  }

  get currentAddFormCtl() {
    return this.infoForm.get('currentAdd') as FormControl;
  }

  get emailFormCtl() {
    return this.infoForm.get('email') as FormControl;
  }

  getEmailErrorMessage() {
    if (this.emailFormCtl.hasError('required')) {
      return '請填此欄位'
    }
    return this.emailFormCtl.hasError('email') ? '格式不正確，例:WaDaMing@gmail.com' : '';
  }

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<ResumeInvitationBasicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(COUNTRY_TOKEN) public countryObj: ICountry
  ) {
    super();
    Object.keys(countryObj.userinfo_country_code).forEach((value: string) => {
      this.countryCodeOptions.push({
        text: countryObj.userinfo_country_code[value].toString(),
        key: value
      })
    });
    this.store.select(UserSelectors.selectResumeBasicInfo)
      .subscribe(res => {
        this.nameCFormCtl.setValue(res?.nameC);
        this.nameEFormCtl.setValue(res?.nameE);
        this.idNoFormCtl.setValue(res?.idNo);
        this.sexCodeFormCtl.setValue(res?.sexCode);
        this.birthDateFormCtl.setValue(res?.birthDate);
        const phoneOjb = this.getPhoneFormat(res?.currentTel || '');
        this.countryCodeFormCtl.setValue(phoneOjb.code);
        this.currentTelFormCtl.setValue(phoneOjb.phone);
        this.currentAddFormCtl.setValue(res?.currentAdd);
        this.emailFormCtl.setValue(res?.email);
      });
  }

  ngOnInit(): void {
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


  closeDialog(isSuccess: boolean) {
    this.sexCodeFormCtl.addValidators([Validators.required]);
    this.sexCodeFormCtl.updateValueAndValidity();
    this.sexCodeFormCtl.markAsTouched();
    this.infoForm.markAllAsTouched();
    console.log(this.infoForm);
    if (this.infoForm.invalid) {
      return;
    }

    this.dialogRef.close(isSuccess ? {
      ...this.infoForm.value,
      currentTel: this.countryObj.id_to_countrycode[this.countryCodeFormCtl.value].toString() + this.currentTelFormCtl.value
    } : false);
  }
}
