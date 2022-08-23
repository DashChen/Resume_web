import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { COUNTRY_TOKEN } from '@app/app.module';
import { DataService, FormErrorStateMatcher } from '@app/core';
import { basicDialog, IBasicDialog } from '@app/core/interfaces/basic-dialog';
import { ICountry } from '@app/core/interfaces/country';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { ApiConfig } from '@app/core/models/Api';
import { BaseComponent } from '@app/shared';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent extends BaseComponent implements OnInit {
  title: string = '忘記密碼';
  subtitle: string = '請選擇手機或Email重新設定密碼';
  btnText: string = '發送驗證信件';

  tabSelected = new FormControl(0);

  emailValidationForm = new FormGroup({
    emailAddress: new FormControl('', [Validators.required, Validators.email])
  });

  get emailAddressFormCtl() {
    return this.emailValidationForm.get('emailAddress') as FormControl;
  }

  mobileValidationForm = new FormGroup({
    countryCode: new FormControl('TW', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(9),
      Validators.maxLength(13)
    ])
  });

  get countryCodeFormControl() {
    return this.mobileValidationForm.get('countryCode') as FormControl;
  }

  get mobileFormControl() {
    return this.mobileValidationForm.get('mobile') as FormControl;
  }

  countryCodeOptions: ISelectOption[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public dataService: DataService<ApiConfig>,
    @Inject(COUNTRY_TOKEN) countryObj: ICountry) {
      super();
      Object.keys(countryObj.userinfo_country_code).forEach((value: string) => {
        this.countryCodeOptions.push({
          text: countryObj.userinfo_country_code[value].toString(),
          key: value
        })
      })
    }

  ngOnInit(): void {
    this.dialogConfig = new basicDialog();
  }

  getEmailAddressErrorMessage() {
    if (this.emailAddressFormCtl.hasError('required')) {
      return '請填寫此欄位'
    }
    return this.emailAddressFormCtl.hasError('email') ? '格式不正確，例:WaDaMing@gmail.com' : '';
  }

  getCountryCodeErrorMessage() {
    if (this.countryCodeFormControl.hasError('required')) {
      return '請選擇這個欄位';
    }
    return '';
  }

  getMobileErrorMessage() {
    if (this.mobileFormControl.hasError('required')) {
      return '請填寫這個欄位';
    }
    return '手機號碼格式錯誤';
  }

  changeTab(index: number) {
    this.tabSelected.setValue(index);
    this.btnText = index == 0 ? '發送驗證信件' : '發送驗證訊息';
  }

  maskPhone(phone: string, maskStr: string = '*') {
    const result = phone.replace(/\D/g, '').match(/(\d{4})(\d{3})(\d{2,6})/);
    if (!result || result?.length < 3) return '';
    return result[1].padEnd(result[1].length + result[2].length, maskStr) + result[3];
  }

  sendVerification() {
    this.dialogConfig.icon = 'success';
    this.dialogConfig.title = '信件發送成功';
    this.dialogConfig.subTitle = '信件已發送至信箱';
    this.dialogConfig.successBtnText = '返回登入畫面';

    const dialogRef = this.dialog.open(CommonDialogComponent, {
      height: '311px',
      width: '614px',
      data: this.dialogConfig
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/login']);
      }
    });
  }
}
