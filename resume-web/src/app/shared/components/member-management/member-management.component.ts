import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '@app/core';
import { ApiConfig, ResumeUserDatasUserDto } from '@app/core/models/Api';
import { Store } from '@ngrx/store';
import { catchError, finalize, from, interval, map, Observable, startWith, Subscription, take, takeUntil, tap, throwError } from 'rxjs';
import { BaseComponent } from '../base.component';
import { selectCurrentUser } from '@app/shared/store/user/user.selectors';
import { Actions as CommonActions } from '@app/shared/store/common';
import { MediaObserver } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator, dateValidator, idCardValidator, MatchValidator, nameValidator } from '@app/core/validators';
import { ISelectOption } from '@app/core/interfaces/select-option';
import { COUNTRY_TOKEN } from '@app/app.module';
import { ICountry } from '@app/core/interfaces/country';

@Component({
  selector: 'app-shared-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent extends BaseComponent implements OnInit, AfterViewInit {
  @Input() showCommunity: boolean = false;
  @Input() authorizeType: 'user' | 'admin' = 'user';

  currentUser$ = this.store.select(selectCurrentUser);
  user: ResumeUserDatasUserDto | null | undefined;

  nameForm: FormGroup = new FormGroup({
    Name: new FormControl({
      value:'',
      disabled: true
    }, [
      Validators.required,
      nameValidator(),
    ]),
  });

  get nameFormCtl() {
    return this.nameForm.get('Name') as FormControl;
  }

  getNameErrorMessage() {
    if (this.nameFormCtl.hasError('required')) {
      return '請填寫這個欄位';
    }
    // console.log('getNameErrorMessage', this.nameFormCtl.errors);
    if (this.nameFormCtl.hasError('maxlength')) {
      return `長度最多${this.nameFormCtl.getError('maxlength').maxLength}`;
    }
    return this.nameFormCtl.hasError('name') ? '格式不正確，請輸入文字' : '';
  }


  idNoForm: FormGroup = new FormGroup({
    IdNo: new FormControl({
      value:'',
      disabled: true
    }, [
      Validators.pattern('^[A-Z]{1}[1-2]{1}[0-9]{8}$'),
      idCardValidator(),
    ]),
  });

  get idNoFormCtl() {
    return this.idNoForm.get('IdNo') as FormControl;
  }

  getIdNoErrorMessage() {
    if (this.idNoFormCtl.hasError('pattern') || this.idNoFormCtl.hasError('idCard')) {
      return '格式不正確，需包含一個大寫字母與9位數';
    }

    return '';
  }

  birthdayForm: FormGroup = new FormGroup({
    Birthday: new FormControl({
      value:'',
      disabled: true
    },[]),
  });

  get birthdayFormCtl() {
    return this.birthdayForm.get('Birthday') as FormControl;
  }

  getBirthdayErrorMessage() {
    if (this.birthdayFormCtl.hasError('required') || this.birthdayFormCtl.hasError('date')) {
      return '不正確的日期格式';
    }
    return '';
  }

  phoneForm: FormGroup = new FormGroup({
    countryCode: new FormControl({
      value: 'TW',
      disabled: true
    }, [Validators.required]),
    Phone: new FormControl({
      value:'',
      disabled: true
    }, [
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(9),
      Validators.maxLength(13)
    ]),
  });

  get countryCodeFormCtl() {
    return this.phoneForm.get('countryCode') as FormControl;
  }

  getCountryCodeErrorMessage() {
    if (this.countryCodeFormCtl.hasError('required')) {
      return '請選擇這個欄位';
    }
    return '';
  }

  get phoneFormCtl() {
    return this.phoneForm.get('Phone') as FormControl;
  }

  getMobileErrorMessage() {
    if (this.phoneFormCtl.hasError('exist') || this.phoneFormCtl.hasError('same')) {
      return '該手機號碼已被註冊';
    }
    return '手機號碼格式錯誤';
  }
  // 已經驗證過
  verifiedSmsCode: boolean = false;
  smsCode: FormControl = new FormControl({
    value: '',
    disabled: true,
  },[
    Validators.required,
    Validators.pattern('[0-9]{6}')
  ]);

  getSmsCodeErrorMessage() {
    if (this.smsCode.hasError('required')) {
      return '請填寫這個欄位';
    }
    return this.smsCode.hasError('pattern') ? '驗證碼格錯誤' : '';
  }

  emailForm: FormGroup = new FormGroup({
    Email: new FormControl({
      value:'',
      disabled: true
    }, [Validators.email]),
  });

  get emailFormCtl() {
    return this.emailForm.get('Email') as FormControl;
  }

  getEmailErrorMessage() {
    if (this.emailFormCtl.hasError('exist') || this.emailFormCtl.hasError('same')) {
      return '該電子郵件已被註冊';
    }
    return this.emailFormCtl.hasError('email') ? '格式不正確，例:WaDaMing@gmail.com' : '';
  }

  passwordForm: FormGroup = new FormGroup({
    password: new FormControl({
      value:'********',
      disabled: true
    }),
  });

  get passwordFormCtl() {
    return this.passwordForm.get('password') as FormControl;
  }

  getPasswordErrorMessage() {
    if (this.passwordFormCtl.hasError('required')) {
      return '請填寫這個欄位';
    }
    return '';
  }

  newPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]),
    newConfirmPassword: new FormControl('', [Validators.required, MatchValidator('newPassword', 'newConfirmPassword')]),
  });

  get newPasswordFormCtl() {
    return this.newPasswordForm.get('newPassword') as FormControl;
  }

  getNewPasswordErrorMessage() {
    if (this.newPasswordFormCtl.hasError('required')) {
      return '請填寫這個欄位';
    }
    if (this.newPasswordFormCtl.hasError('match')) {
      return '新密碼與舊密碼不得相同';
    }

    const len = this.newPasswordFormCtl.getError('minlength').requiredLength;
    if (this.newPasswordFormCtl.hasError('minlength') || this.newPasswordFormCtl.hasError('passwordStrength')) {
      return `密碼設定長度${len}字元．包含英文大小寫及特殊符號`;
    }

    return '';
  }

  get newConfirmPasswordFormCtl() {
    return this.newPasswordForm.get('newConfirmPassword') as FormControl;
  }

  getConfirmPwdErrorMessage() {
    if (this.newConfirmPasswordFormCtl.hasError('required')) {
      return '請填寫這個欄位';
    }
    return this.newConfirmPasswordFormCtl.hasError('mismatch') ? '密碼輸入不正確' : '';
  }

  countryCodeOptions: ISelectOption[] = [];
  defaultPassword: string = '********';;
  hasPwd: boolean = true;

  // 三方登入用
  accountId: string = '';

  mfaGoogle: string = '';
  mfaLine: string = '';
  mfaFacebook: string = '';

  bounded = {
    email: false,
    phone: false,
    google: true,
    line: true,
    facebook: true,
  }

  focusBtnKey: string | 'Name' | 'Birthday' | 'Phone' | 'Email' |  'newPassword' = '';
  showPassword: boolean = false;
  showNewPassword: boolean = false;
  showNewConfirmPassword: boolean = false;

  requestData$: any = null;
  timer$ = interval(1000);
  showCountdown: boolean = false;
  basicCountdown: number = 30;
  countdown: number = 30;
  disabledSendAgain: boolean = false;

  // 使否響應小版(Figma 上的SP)
  isSP: boolean = false;

  constructor(
    public override store: Store,
    public override dialog: MatDialog,
    public dataService: DataService<ApiConfig>,
    public mediaObserver: MediaObserver,
    @Inject(COUNTRY_TOKEN) public countryObj: ICountry
  ) {
    super(store, dialog);
    Object.keys(countryObj.userinfo_country_code).forEach((value: string) => {
      this.countryCodeOptions.push({
        text: countryObj.userinfo_country_code[value].toString(),
        key: value
      })
    });
    mediaObserver.asObservable().subscribe(res => {
      console.log('mediaObserver', res);
      res.forEach(mediaChange => {
        if (mediaChange.mqAlias === 'lt-md' && mediaChange.matches) {
          this.isSP = true;
        }
      })
    });
  }

  ngOnInit(): void {
    this.requestData$ = from(this.dataService.api.appUserDatasGetDataByAccountIdList({
      headers: {
        ...this.dataService.getAuthorizationToken(this.authorizeType)
      }
    })).pipe(
      catchError(err => {
        return throwError(() => {
          const errMsg = `${err.error.error.message}`;
          this.store.dispatch(CommonActions.setErr({
            payload: {
              errMsg
            }
          }));
          return new Error(errMsg);
        });
      }),
      finalize(() => {
        this.store.dispatch(CommonActions.setApiLoading({ payload: false }));
        this.requestData$.unsubscribe()
      }),
      takeUntil(this.destroy$),
    ).subscribe(
      res => {
        console.log(res);
        this.user = res.data;
        this.nameFormCtl.setValue(res.data.name || '');
        this.idNoFormCtl.setValue(res.data.idNo || '');
        const phoneOjb = this.getPhoneFormat(res.data.phone || '');
        this.countryCodeFormCtl.setValue(phoneOjb.code);
        this.phoneFormCtl.setValue(phoneOjb.phone);
        this.emailFormCtl.setValue(res.data.email || '');
        this.birthdayFormCtl.setValue(res.data.birthDay || '');
        this.bounded.email = res.data.mailVerify || false;
        this.bounded.phone = res.data.phoneVerify || false;
        this.bounded.google = res.data.googleVerify || false;
        this.bounded.facebook = res.data.fbVerify || false;
        this.bounded.line = res.data.lineVerify || false;
      },
      err => {
        console.log(err);
      }
    );
    this.phoneFormCtl.valueChanges.subscribe(res => {
      if (this.phoneFormCtl.hasError('exist') || this.phoneFormCtl.hasError('same')) {
        this.phoneFormCtl.reset();
        this.phoneFormCtl.setValue(res);
      }
    });
    this.emailFormCtl.valueChanges.subscribe(res => {
      if (this.emailFormCtl.hasError('exist') || this.emailFormCtl.hasError('same')) {
        this.emailFormCtl.reset();
        this.emailFormCtl.setValue(res);
      }
    });
    this.passwordFormCtl.valueChanges.subscribe(res => {
      if (res && res.length > 0) {
        if (res === this.newPasswordFormCtl.value) {
          this.newPasswordFormCtl.setErrors({
            match: true
          });
        } else {
          this.newPasswordFormCtl.updateValueAndValidity();
        }
      }
    });
    this.newPasswordFormCtl.valueChanges.subscribe(res => {
      if (res && res.length > 0) {
        if (res === this.passwordFormCtl.value) {
          this.newPasswordFormCtl.setErrors({
            match: true
          });
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.birthdayFormCtl.valueChanges.subscribe(res => {
      // console.log('birthdayFormCtl', res);
      if (!res) {
        this.birthdayFormCtl.setErrors({date: true});
      }
    });
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

  editMember(event: MouseEvent, type: string) {
    event.preventDefault();
    event.stopPropagation();
    if (this.focusBtnKey !== type) {
      this.disOrEnableFormCtl(this.focusBtnKey, true);
      this.focusBtnKey = type;
      this.disOrEnableFormCtl(type, false);
    } else {
      let requestApi ;
      switch (type) {
        case 'Name':
          if (this.nameForm.invalid) {
            this.nameForm.markAllAsTouched();
            return;
          }

          requestApi = this.dataService.api.appUserDatasUpdateNameUpdate(this.nameForm.value,{
            headers: {
              ...this.dataService.getAuthorizationToken(this.authorizeType)
            }
          });
          break;
        case 'Birthday':
          console.log(this.birthdayFormCtl);
          if (this.birthdayFormCtl.invalid) {
            this.birthdayFormCtl.markAllAsTouched();
            return;
          }
          this.birthdayFormCtl.addValidators([Validators.required]);
          this.birthdayFormCtl.updateValueAndValidity();
          this.birthdayFormCtl.markAsTouched();
          if (this.birthdayForm.invalid) {
            return;
          }
          requestApi = this.dataService.api.appUserDatasUpdateBirthdayUpdate(this.birthdayForm.value,{
            headers: {
              ...this.dataService.getAuthorizationToken(this.authorizeType)
            }
          });
          break;
        case 'Email':
          if (this.emailForm.invalid) {
            this.emailForm.markAllAsTouched();
            return;
          }
          this.sendBoundEmail();
          return;
        case 'Phone':
          if (this.phoneForm.invalid) {
            this.phoneForm.markAllAsTouched();
            return;
          }
          if (this.verifiedSmsCode) {
            requestApi = this.dataService.api.appUserDatasUpdatePhoneUpdate({
              Phone: this.countryObj.id_to_countrycode[this.countryCodeFormCtl.value].toString() + this.phoneFormCtl.value
            },{
              headers: {
                ...this.dataService.getAuthorizationToken(this.authorizeType)
              }
            });
          }
          break;
        case 'IdNo':
          if (this.idNoForm.invalid) {
            this.idNoForm.markAllAsTouched();
            return;
          }
          requestApi = this.dataService.api.appUserDatasUpdateIdNoUpdate(this.idNoForm.value,{
            headers: {
              ...this.dataService.getAuthorizationToken(this.authorizeType)
            }
          });
          break;
      }
      if (requestApi) {
        const requestHttp$ = from(requestApi).pipe(
          catchError(err => {
            return throwError(() => {
              const errMsg = `${err.error.error.message}`;
              this.store.dispatch(CommonActions.setErr({
                payload: {
                  errMsg
                }
              }));
              return new Error(errMsg);
            });
          }),
          finalize(() => {
            // 更新 user 資訊
            this.updateUserData(type);
            this.focusBtnKey = '';
            this.disOrEnableFormCtl(type, true);
            requestHttp$.unsubscribe()
          }),
          takeUntil(this.destroy$),
        ).subscribe(
          res => {
            console.log(res);
            if (res.ok) {
              this.successDialog('更新完成', '');
            }
          },
          err => {
            console.log(err);
          }
        )
      }
    }
  }

  updateUserData(type: string) {
    switch (type) {
      case 'Name':
        if (this.user) {
          this.user.name = this.nameFormCtl.value;
        }
        break;
      case 'Birthday':
        if (this.user) {
          this.user.birthDay = this.birthdayFormCtl.value;
        }
        break;
      case 'Email':
        if (this.user) {
          this.user.email = this.emailFormCtl.value;
        }
        // 自動綁定
        // if (this.emailFormCtl.value) {
        //   this.sendBoundEmail();
        // }
        break;
      case 'Phone':
        if (this.user) {
          this.user.phone = this.countryObj.id_to_countrycode[this.countryCodeFormCtl.value].toString() + this.phoneFormCtl.value;
        }
        break;
      case 'IdNo':
        if (this.user) {
          this.user.idNo = this.idNoFormCtl.value;
        }
        break;
    }
  }

  disOrEnableFormCtl(type: string, disable: boolean) {
    if (!type) {
      return;
    }
    switch (type) {
      case 'Name':
        if (disable) {
          this.nameFormCtl.setValue(this.user?.name || '');
          this.nameFormCtl.disable();
        } else {
          this.nameFormCtl.enable();
        }
        break;
      case 'Birthday':
        if (disable) {
          this.birthdayFormCtl.setValue(this.user?.birthDay || '');
          this.birthdayFormCtl.disable();
        } else {
          this.birthdayFormCtl.enable();
        }
        break;
      case 'Email':
        if (disable) {
          this.emailFormCtl.setValue(this.user?.email || '');
          this.emailFormCtl.disable();
        } else {
          this.emailFormCtl.enable();
        }
        break;
      case 'Phone':
        if (disable) {
          this.verifiedSmsCode = false;
          const phoneOjb = this.getPhoneFormat(this.user?.phone || '');
          this.countryCodeFormCtl.setValue(phoneOjb.code);
          this.phoneFormCtl.setValue(phoneOjb.phone);
          this.countryCodeFormCtl.disable();
          this.phoneFormCtl.disable();
        } else {
          this.countryCodeFormCtl.enable();
          this.phoneFormCtl.enable();
        }
        break;
      case 'IdNo':
        if (disable) {
          this.idNoFormCtl.setValue(this.user?.idNo || '');
          this.idNoFormCtl.disable();
        } else {
          this.idNoFormCtl.enable();
        }
        break;
    }
  }

  cancelEdit(event: MouseEvent, type: string) {
    this.focusBtnKey = '';
    switch (type) {
      case 'Name':
        this.nameFormCtl.setValue(this.user?.name || '');
        break;
      case 'Birthday':
        this.birthdayFormCtl.setValue(this.user?.birthDay || '');
        break;
      case 'Email':
        this.emailFormCtl.setValue(this.user?.email || '');
        break;
      case 'Phone':
        this.phoneFormCtl.setValue(this.user?.phone || '');
        break;
      case 'IdNo':
        this.idNoFormCtl.setValue(this.user?.idNo || '');
        break;
    }
    this.disOrEnableFormCtl(type, true);
  }

  // cancelboundMobile() {
  //   console.log('cancelboundMobile');
  //   const subtitle = `按下確認後即解除${this.phoneFormCtl.value}此手機號碼，請問是否解除?`;
  //   const dialogRef = this.errDialog('解除綁定', subtitle, '確認', '取消');
  //   dialogRef.afterClosed().subscribe(
  //     (res) => {
  //       if (res) {
  //         // TODO 解除綁定
  //         this.bounded.phone = false;
  //         this.focusBtnKey = '';
  //       }
  //     }
  //   );
  // }

  // boundEmail() {
  //   // 取消按鈕
  //   if (this.focusBtnKey !== '') {
  //     this.disOrEnableFormCtl(this.focusBtnKey, true);
  //     this.focusBtnKey = '';
  //   } else if (!this.isSP) {
  //     if (!this.bounded.email) {
  //       this.sendBoundEmail();
  //     } else {
  //       const subtitle = `按下確認後即解除${this.emailFormCtl.value}此電子郵件，請問是否解除?`;
  //       const dialogRef = this.errDialog('解除綁定', subtitle, '確定', '取消');
  //       dialogRef.afterClosed().subscribe((res) => {
  //         console.log(res);
  //         if (res) {
  //           // TODO 解除綁定信箱
  //           this.bounded.email = false;
  //         }
  //       });
  //     }
  //   }
  // }

  sendBoundEmail() {
    if (this.emailFormCtl.value === this.user?.email) {
      // 代表電子郵件相同
      this.emailFormCtl.setErrors({
        same: true
      });
      this.emailFormCtl.markAsTouched();
      return;
    }
    const requestHttp$ = from(this.dataService.api.appUserDatasUpdateEmailUpdate(this.emailForm.value,{
      headers: {
        ...this.dataService.getAuthorizationToken(this.authorizeType)
      }
    })).pipe(
      catchError(err => {
        return throwError(() => {
          const errMsg = `${err.error.error.message}`;
          this.store.dispatch(CommonActions.setErr({
            payload: {
              errMsg
            }
          }));
          return new Error(errMsg);
        });
      }),
      finalize(() => {
        this.updateUserData('Email');
        this.focusBtnKey = '';
        this.disOrEnableFormCtl('Email', true);
        requestHttp$.unsubscribe()
      }),
      takeUntil(this.destroy$),
    ).subscribe(
      res => {
        console.log(res);
        if (!res.data) {
          this.emailFormCtl.setErrors({
            exist: true
          });
          this.emailFormCtl.markAsTouched();
        } else {
          this.bounded.email = true;
          this.successDialog('系統已發出驗證信件', '麻煩至您填寫的信箱進行驗證！', '確定');
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  // 傳送驗證碼
  sendSMS() {
    // 確認手機號是否正確
    if (this.phoneForm.invalid) {
      console.log(this.phoneForm);
      this.phoneForm.markAllAsTouched();
      return;
    }
    const tempPhone = this.countryObj.id_to_countrycode[this.countryCodeFormCtl.value].toString() + this.phoneFormCtl.value;
    // 檢查新手機號是否已被註冊
    if (tempPhone != this.user?.phone) {
      const request$ = from(this.dataService.api.appRegisterCheckPhoneExsistCreate({
        Phone: tempPhone
      })).pipe(
        finalize(() => {
          request$.unsubscribe();
        }),
        catchError(err => {
          return throwError(() => {
            const errMsg = `${err.error.error.message}`;
            this.store.dispatch(CommonActions.setErr({
              payload: {
                errMsg
              }
            }));
            return new Error(errMsg);
          });
        }),
      ).subscribe(res => {
        console.log(res);
        if (!res.data) {
          // 代表等待送出驗證碼
          const requestHttp$ = from(this.dataService.api.appRegisterResumeSendVerifyCodeCreate({
            Phone: tempPhone
          }))
          .pipe(
            catchError(err => {
              return throwError(() => {
                const errMsg = `${err.error.error.message}`;
                this.store.dispatch(CommonActions.setErr({
                  payload: {
                    errMsg
                  }
                }));
                return new Error(errMsg);
              });
            }),
            finalize(() => {
              requestHttp$.unsubscribe();
            }),
            takeUntil(this.destroy$),
          ).subscribe((next) => {
            console.log(next);
            this.smsCode.disable();
            if (next.ok) {
              this.countryCodeFormCtl.disable();
              this.phoneFormCtl.disable();
              this.smsCode.enable();
              this.showCountdown = true;
              this.countdown = 30;
              const countdown$ = this.timer$.pipe(
                map(n => this.countdown = this.basicCountdown - n - 1),
                tap(() => {
                  this.disabledSendAgain = this.countdown > 0;
                }),
                take(this.basicCountdown),
                startWith(this.basicCountdown),
                finalize(() => {
                  this.showCountdown = false;
                  countdown$.unsubscribe();
                }),
                takeUntil(this.destroy$)
              ).subscribe();
            }
          });
        } else {
          // 代表電話號碼已經存在
          this.phoneFormCtl.setErrors({
            exist: true
          });
        }
      });
    } else {
      this.phoneFormCtl.setErrors({
        same: true
      });
      this.phoneForm.markAllAsTouched();
    }
  }

  // 確認驗證碼
  verifidPhone() {
    if (this.smsCode.invalid) {
      this.smsCode.markAsTouched();
      return;
    }
    this.smsCode.disable();
    const requestHttp$ = from(this.dataService.api.appRegisterConfirmVerifyCodeCreate({
      Phone: this.countryObj.id_to_countrycode[this.countryCodeFormCtl.value].toString() + this.phoneFormCtl.value,
      Code: this.smsCode.value,
    }))
    .pipe(
      catchError(err => {
        return throwError(() => {
          const errMsg = `${err.error.error.message}`;
          this.store.dispatch(CommonActions.setErr({
            payload: {
              errMsg
            }
          }));
          return new Error(errMsg);
        });
      }),
      finalize(() => {
        requestHttp$.unsubscribe();
      }),
      takeUntil(this.destroy$),
    ).subscribe((next) => {
      console.log(next);
      if (next.data) {
        this.showCountdown = false;
        this.verifiedSmsCode = true;
        this.smsCode.reset();
        this.smsCode.disable();
      } else {
        this.errDialog('驗證失敗', '請重新輸入驗證碼!', '確定');
        this.smsCode.enable();
      }
      this.smsCode.setValue('');
    });
  }

  changePwd(isChange: boolean) {
    console.log(isChange, this.focusBtnKey);
    if (isChange) {
      if (this.focusBtnKey !== 'newPassword') {
        this.focusBtnKey = 'newPassword';
        this.showPassword = false;
        this.passwordFormCtl.setValue('');
        this.passwordFormCtl.enable();
      } else {
        // 需要確認
        if (!this.passwordFormCtl.value || this.newPasswordForm.invalid) {
          this.passwordFormCtl.setValidators([Validators.required]);
          this.passwordFormCtl.updateValueAndValidity();
          this.passwordFormCtl.markAsTouched();
          this.newPasswordForm.markAllAsTouched();
          return;
        }
        const requestHttp$ = from(this.dataService.api.accountMyProfileChangePasswordCreate({
          currentPassword: this.passwordFormCtl.value,
          newPassword: this.newPasswordFormCtl.value
        },{
          headers: {
            ...this.dataService.getAuthorizationToken(this.authorizeType)
          },
          format: 'json'
        })).pipe(
          catchError(err => {
            // console.log(err);
            return throwError(() => {
              const errMsg = `${err.error.error.message}`;
              this.store.dispatch(CommonActions.setErr({
                payload: {
                  errMsg
                }
              }));
              return new Error(errMsg);
            });
          }),
          finalize(() => {
            this.defaultChangePws();
            requestHttp$.unsubscribe()
          }),
          takeUntil(this.destroy$),
        ).subscribe(
          res => {
            // console.log(res);
            if (res.ok) {
              this.successDialog('更新完成', '');
            }
          },
          err => {
            // console.log(err);
          }
        )
      }
    } else {
      this.defaultChangePws();
    }
  }

  defaultChangePws() {
    this.focusBtnKey = '';
    this.showPassword = true;
    this.passwordFormCtl.removeValidators([Validators.required]);
    this.passwordFormCtl.updateValueAndValidity();
    this.passwordFormCtl.reset();
    this.passwordFormCtl.setValue(this.defaultPassword);
    this.passwordFormCtl.disable();
    this.newPasswordForm.reset();
    this.newPasswordForm.setValue({
      newPassword: '',
      newConfirmPassword: ''
    });
  }

  boundMFA(provider: string) {
    let showCancelError = false;
    switch (provider) {
      case 'Google':
        showCancelError = this.bounded.google;
        break;
      case 'Line':
        showCancelError = this.bounded.line;
        break;
      case 'Facebook':
        showCancelError = this.bounded.facebook;
        break;
    }
    let request$: Subscription;
    if (showCancelError) {
      const subtitle = `按下確認後即解除${this.accountId}此帳號，請問是否解除?`;
      const dialogRef = this.errDialog('解除綁定', subtitle, '確定', '取消');
      dialogRef.afterClosed().subscribe(
        (res) => {
          if (res) {
            // 需要取得三方 accountCode
            request$ = from(this.dataService.api.appThirdPartiesUnAuthList({
              ThirdPartyAccountCode: '',
              ThirdPartyTypeCode: provider
            })).pipe(
              catchError(err => {
                return throwError(() => {
                  const errMsg = `${err.error.error.message}`;
                  this.store.dispatch(CommonActions.setErr({
                    payload: {
                      errMsg
                    }
                  }));
                  return new Error(errMsg);
                });
              }),
              finalize(() => {
                request$.unsubscribe();
              }),
              takeUntil(this.destroy$)
            ).subscribe(res => {
              if (res.data) {
                // TODO 三方登入解除綁定
                switch (provider) {
                  case 'Google':
                    this.bounded.google = true;
                    break;
                  case 'Line':
                    this.bounded.line = true;
                    break;
                  case 'Facebook':
                    this.bounded.facebook = true;
                    break;
                }
              }
              if (res.ok) {
                this.successDialog('更新完成', '');
              }
            });
          }
        }
      )
    } else {
      // TODO 三方登入綁定
      // 需要取得三方 accountCode
      request$ = from(this.dataService.api.appThirdPartiesAuthList({
        ThirdPartyAccountCode: '',
        ThirdPartyTypeCode: provider
      })).pipe(
        catchError(err => {
          return throwError(() => {
            const errMsg = `${err.error.error.message}`;
            this.store.dispatch(CommonActions.setErr({
              payload: {
                errMsg
              }
            }));
            return new Error(errMsg);
          });
        }),
        finalize(() => {
          request$.unsubscribe();
        }),
        takeUntil(this.destroy$)
      ).subscribe(res => {
        if (res.data) {
          // TODO 三方登入解除綁定
          switch (provider) {
            case 'Google':
              this.bounded.google = false;
              break;
            case 'line':
              this.bounded.line = false;
              break;
            case 'facebook':
              this.bounded.facebook = false;
              break;
          }
        }
        if (res.ok) {
          this.successDialog('更新完成', '');
        }
      });
    }
  }
}
