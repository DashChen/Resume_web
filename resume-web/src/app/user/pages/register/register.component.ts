import { Component, Inject, OnInit, QueryList } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { COUNTRY_TOKEN } from '@app/app.module';
import { DataService, FormErrorStateMatcher } from '@app/core';
import { IBasicDialog } from '@app/core/interfaces/basic-dialog';
import { ICountry } from '@app/core/interfaces/country';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { ApiConfig } from '@app/core/models/Api';
import { BaseComponent } from '@app/shared';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { Actions as UserActions } from '@app/shared/store/user';
import { Store } from '@ngrx/store';
import { from, interval, Observable, of } from 'rxjs';
import { catchError, map, shareReplay, startWith, take, takeUntil, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {
  title: string = '註冊';
  subtitle: string = '請輸入您的手機號碼進行驗證';
  btnText: string = '發送驗證碼';
  otherTitle: string = '已經有帳號?';
  otherActionText: string = '登入';

  tempPhone: string = '';

  beforeValidationForm = new FormGroup({
    countryCode: new FormControl('TW', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(9),
      Validators.maxLength(13)
    ])
  });

  get countryCodeFormControl() {
    return this.beforeValidationForm.get('countryCode') as FormControl;
  }

  get mobileFormControl() {
    return this.beforeValidationForm.get('mobile') as FormControl;
  }

  validationForm = new FormGroup({
    verificationCode: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{6}')
    ])
  })

  get verificationCodeFormControl() {
    return this.validationForm.get('verificationCode') as FormControl;
  }

  countryCodeOptions: ISelectOption[] = [];
  showCountdown: boolean = false;
  basicCountdown: number = 60;
  countdown: number = 60;
  validateError: boolean = false;
  validateErrorTimes: number = 0;
  timer$ = interval(1000);
  disabledSendAgain: boolean = true;

  constructor(
    public router: Router,
    public store: Store,
    public dialog: MatDialog,
    public dataService: DataService<ApiConfig>,
    @Inject(COUNTRY_TOKEN) public countryObj: ICountry) {
      super();
      Object.keys(countryObj.userinfo_country_code).forEach((value: string) => {
        this.countryCodeOptions.push({
          text: countryObj.userinfo_country_code[value].toString(),
          key: value
        })
      })
    }

  ngOnInit(): void {
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

  getVerificationCodeErrorMessage() {
    if (this.verificationCodeFormControl.hasError('required')) {
      return '請填寫這個欄位';
    }
    if (this.verificationCodeFormControl.hasError('pattern')) {
      return '驗證碼格錯誤';
    }
    return this.verificationCodeFormControl.hasError('minlength') ? '驗證碼長度錯誤' : '';
  }

  maskPhone(phone: string, maskStr: string = '*') {
    const result = phone.replace(/\D/g, '').match(/(\d{4})(\d{3})(\d{2,6})/);
    if (!result || result?.length < 3) return '';
    return result[1].padEnd(result[1].length + result[2].length, maskStr) + result[3];
  }

  getCountdownStr() {
    const minunte = Math.floor(this.countdown/60).toString().padStart(2, '0');
    const seconds = (this.countdown % 60).toString().padStart(2, '0')
    return minunte + ':' + seconds;
  }

  getCountryCode(id: string): string {
    return this.countryObj.id_to_countrycode[id].toString();
  }

  submitForm() {
    // 代表等待送出驗證碼
    if (this.showCountdown) {
      if (this.validationForm.valid) {
        from(this.dataService.api.appRegisterConfirmVerifyCodeCreate({
          Phone: this.tempPhone,
          Code: this.verificationCodeFormControl.value,
        }))
        .pipe(
          catchError(err => of(err)),
        ).subscribe((next) => {
          console.log(next);
          if (next.data) {
            this.store.dispatch(UserActions.setRegisterPhone({ phone: this.tempPhone }));
            this.router.navigate(['/register-info']);
          } else {
            this.validateError = true;
            this.showCountdown = false;
            this.title = '驗證失敗';
            this.subtitle = '請輸入您的手機號碼，進行驗證';
            this.btnText = '確認';
            this.beforeValidationForm.reset();
            this.countryCodeFormControl.setValue('TW');
          }
        });
      } else {
        this.validateAllFormFields(this.validationForm);
      }
    } else {
      if (this.beforeValidationForm.valid) {
        // 驗證失敗或其他
        this.validateError = false;
        this.sendVerificationCode();
      } else {
        this.validateAllFormFields(this.beforeValidationForm);
      }
    }
  }

  sendVerificationCode() {
    // 代表等待送出驗證碼
    if (this.validateErrorTimes < 3) {
      this.tempPhone = this.getCountryCode(this.countryCodeFormControl.value) + this.mobileFormControl.value;
      from(this.dataService.api.appRegisterResumeSendVerifyCodeCreate({
        Phone: this.tempPhone
      }))
      .pipe(
        catchError(err => of(err)),
      ).subscribe((next) => {
        console.log(next);
        this.validateErrorTimes ++;
        this.title = '驗證碼已發送';
        this.subtitle = `請輸入傳送到${this.maskPhone(this.tempPhone)}的驗證碼以繼續`;
        this.showCountdown = true;
        this.countdown = 60;
        this.otherTitle = '沒有收到驗證碼嗎?';
        this.otherActionText = '再次發送驗證碼';
        this.timer$.pipe(
          map(n => this.countdown = this.basicCountdown - n - 1),
          tap(() => {
            this.disabledSendAgain = this.countdown > 0;
          }),
          take(this.basicCountdown),
          startWith(this.basicCountdown),
          takeUntil(this.destroy$)
        ).subscribe();
        this.validationForm.reset();
      });
    } else {
      this.dialogConfig.icon = 'error';
      this.dialogConfig.title = '重新輸入手機號碼';
      this.dialogConfig.subTitle = '為確保您的手機號碼填寫正確，重新發送三次未收到需重新操作。';
      this.dialogConfig.showSuccessBtn = true;
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
      })
    }
  }

  otherAction(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (this.disabledSendAgain && this.showCountdown) {
      return;
    }

    if (this.showCountdown) {
      this.sendVerificationCode();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
