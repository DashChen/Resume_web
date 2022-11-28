import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { COUNTRY_TOKEN } from '@app/app.module';
import { DataService, FormErrorStateMatcher } from '@app/core';
import { basicDialog, IBasicDialog } from '@app/core/interfaces/basic-dialog';
import { ICountry } from '@app/core/interfaces/country';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { ApiConfig } from '@app/core/models/Api';
import { BaseComponent } from '@app/shared';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { catchError, EMPTY, finalize, from, interval, map, of, startWith, take, takeUntil, tap, throwError } from 'rxjs';
import { Actions as UserActions } from '@app/shared/store/user';
import { Actions as RouterActions } from '@app/shared/store/router';
import { Actions as CommonActions } from '@app/shared/store/common';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent extends BaseComponent implements OnInit {
  title: string = '忘記密碼';
  subtitle: string = '請選擇手機或Email重新設定密碼';
  btnText: string = '發送驗證信件';
  otherTitle: string = '沒有收到驗證碼';
  otherSubtitle: string = '返回登入畫面';

  tempPhone: string = '';
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

  validationForm = new FormGroup({
    verificationCode: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{6}')
    ])
  })

  get verificationCodeFormControl() {
    return this.validationForm.get('verificationCode') as FormControl;
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

  countryCodeOptions: ISelectOption[] = [];
  showCountdown: boolean = false;
  basicCountdown: number = 60;
  countdown: number = 60;
  validateError: boolean = false;
  validateErrorTimes: number = 0;
  timer$ = interval(1000);
  disabledSendAgain: boolean = true;
  showValidateCode: boolean = false;
  disBtn: boolean = false;

  constructor(
    public override store: Store,
    public override dialog: MatDialog,
    public dataService: DataService<ApiConfig>,
    @Inject(COUNTRY_TOKEN) public countryObj: ICountry) {
      super(store, dialog);
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
    this.btnText = index == 0 ? '發送驗證信件' : '發送驗證簡訊';
    this.otherSubtitle = '返回登入畫面';
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

  sendVerification() {
    if (this.tabSelected.value === 0) {
      const request$ = from(this.dataService.api.appRegisterResumeMailVerifyCodeCreate({
        Email: this.emailAddressFormCtl.value,
      }))
      .pipe(
        catchError((err: HttpErrorResponse) => {
          // console.log(err);
          this.store.dispatch(CommonActions.setErr({ payload: {
            errMsg: err.error.error.message,
          }}));
          return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
        }),
        finalize(() => {
          request$.unsubscribe();
        }),
      ).subscribe((next) => {
        console.log(next);
        if (next.ok) {
          this.dialogConfig.icon = 'success';
          this.dialogConfig.title = '信件發送成功';
          this.dialogConfig.subTitle = '信件已發送至信箱';
          this.dialogConfig.successBtnText = '返回登入畫面';
          this.dialogConfig.showSuccessBtn = true;

          const dialogRef = this.dialog.open(CommonDialogComponent, {
            height: '311px',
            width: '614px',
            data: this.dialogConfig
          });

          dialogRef.afterClosed().subscribe(result => {
            if (result && next.ok) {
              this.store.dispatch(UserActions.setTempAccount({payload: this.emailAddressFormCtl.value }));
              this.store.dispatch(RouterActions.Go({path: ['/user/login']}));
            }
          });
        }
      });
    } else if (this.tabSelected.value === 1 && !this.showCountdown) {
      this.sendVerificationCode();
    } else {
      // 送出簡訊驗證碼
      if (this.validationForm.valid) {
        this.sendConfirmVerificationCode();
      }
    }
  }

  sendConfirmVerificationCode() {
    const request$ = from(this.dataService.api.appRegisterConfirmVerifyCodeCreate({
      Phone: this.tempPhone,
      Code: this.verificationCodeFormControl.value,
    }))
    .pipe(
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        this.store.dispatch(CommonActions.setErr({ payload: {
          errMsg: err.error.error.message,
        }}));
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
      }),
      finalize(() => {
        request$.unsubscribe();
      }),
    ).subscribe((next) => {
      console.log(next);
      if (next.ok && next.data) {
        this.store.dispatch(UserActions.setTempAccount({payload: this.tempPhone }));
        this.store.dispatch(RouterActions.Go({path: ['/user/reset-password']}));
      } else {
        this.validateErrorTimes++;
        this.btnText = '再次驗證';
        this.title = '驗證失敗';
        this.subtitle = `請輸入傳送到${this.maskPhone(this.tempPhone)}的驗證碼以繼續`;
        this.otherTitle = '沒有收到驗證碼嗎?';
        this.otherSubtitle = '再次發送驗證碼';
      }
    });
  }

  getCountryCode(id: string): string {
    return this.countryObj.id_to_countrycode[id].toString();
  }

  sendVerificationCode() {
    this.tempPhone = this.getCountryCode(this.countryCodeFormControl.value) + this.mobileFormControl.value;
    // 先檢查手機號是否存在
    const request$ = from(this.dataService.api.appRegisterCheckPhoneExsistCreate({
      Phone: this.tempPhone
    })).pipe(
      finalize(() => {
        request$.unsubscribe();
      }),
      catchError(err => of(err)),
    ).subscribe(res => {
      console.log(res);
      if (res.data) {
        // 代表等待送出驗證碼
        if (this.validateErrorTimes < 3) {
          this.disBtn = false;
          const request$ = from(this.dataService.api.appRegisterResumeSendVerifyCodeCreate({
            Phone: this.tempPhone,
          }))
          .pipe(
            catchError((err: HttpErrorResponse) => {
              // console.log(err);
              this.store.dispatch(CommonActions.setErr({ payload: {
                errMsg: err.error.error.message,
              }}));
              return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
            }),
            finalize(() => {
              request$.unsubscribe();
            }),
          ).subscribe((next) => {
            console.log(next);
            this.verificationCodeFormControl.enable();
            this.showValidateCode = true;
            this.btnText = '進行驗證';
            this.title = '驗證碼已發送';
            this.subtitle = `請輸入傳送到${this.maskPhone(this.tempPhone)}的驗證碼以繼續`;
            this.showCountdown = true;
            this.countdown = 60;
            this.otherTitle = '沒有收到驗證碼嗎?';
            this.otherSubtitle = '再次發送驗證碼';
            const observe$ = this.timer$.pipe(
              map(n => this.countdown = this.basicCountdown - n - 1),
              tap(() => {
                this.disabledSendAgain = this.countdown > 0;
                if (this.countdown === 0) {
                  this.verificationCodeFormControl.disable();
                  this.disBtn = true;
                  observe$.unsubscribe();
                }
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
              this.store.dispatch(RouterActions.Go({path: ['/user/login']}));
            }
          })
        }
      } else {
        // 代表電話號碼已經存在
        this.title = '此號碼尚未註冊';
        this.subtitle = '';
        this.mobileFormControl.setValue('');
      }
    });
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
      this.store.dispatch(RouterActions.Go({path: ['/user/login']}));
    }
  }
}

