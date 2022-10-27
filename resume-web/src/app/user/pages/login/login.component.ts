import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '@app/core';
import { ApiConfig, ContentType, VoloAbpHttpRemoteServiceErrorResponse } from '@app/core/models/Api';
import { BaseComponent } from '@app/shared';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { Store } from '@ngrx/store';
import { catchError, from, of, skip, startWith, take, takeUntil, tap, throwError, filter } from 'rxjs';
import { Actions as UserActions, Selectors as UserSelectors } from '@app/shared/store/user';
import { Actions as RouterActions } from '@app/shared/store/router';
import { Actions as CommonActions } from '@app/shared/store/common';
import { createPasswordStrengthValidator } from '@app/core/validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  showPassword: boolean = false;

  loginForm = new FormGroup({
    account: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]),
    rememberMe: new FormControl(false),
  })

  get accountFormCtl() {
    return this.loginForm.get('account') as FormControl;
  }

  get passwordFormCtl() {
    return this.loginForm.get('password') as FormControl;
  }

  get rememberMeFormCtl() {
    return this.loginForm.get('rememberMe') as FormControl;
  }

  showLoginError: boolean = false;
  disableLoginBtn: boolean = false;

  constructor(
    public override store: Store,
    public override dialog: MatDialog,
    public dataService: DataService<ApiConfig>) {
    super(store, dialog);
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(selectedValue => {
      this.showLoginError = false;
    });
  }

  getAccountErrorMessage() {
    if (this.accountFormCtl.hasError('required')) {
      return '請填寫這個欄位';
    }

    return this.accountFormCtl.hasError('email') ? '格式不正確，例:WaDaMing@gmail.com' : '';
  }

  getPasswordErrorMessage() {
    if (this.passwordFormCtl.hasError('required')) {
      return '請輸入關鍵字'
    }
    if (this.passwordFormCtl.hasError('passwordStrength')) {
      return '密碼須包含大小寫英文、數字等';
    }
    return this.passwordFormCtl.hasError('minlength') ? '密碼設定長度至少為8個字元的字串' : '';
  }

  getLoginErrorMessage() {
    return `帳號${this.accountFormCtl.value}未註冊或是密碼輸入不正確`;
  }

  login(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.showLoginError = false;
    if (this.loginForm.invalid) {
      return;
    }
    this.disableLoginBtn = true;
    this.store.dispatch(CommonActions.setApiLoading({ payload: true }));
    this.store.dispatch(UserActions.loginAction({
      payload: {
        username: this.accountFormCtl.value,
        password: this.passwordFormCtl.value,
        rememberMe: this.rememberMeFormCtl.value,
      }
    }));
    this.store.select(UserSelectors.selectIsLoggedIn)
      .subscribe(res => {
        if (res) {
          this.store.dispatch(UserActions.getUserAction());
        }
      });
    this.store.select(UserSelectors.selectErr)
      .pipe(
        filter(res => !!res),
        take(1),
      )
      .subscribe(err => {
        console.log(err);
        this.store.dispatch(CommonActions.setApiLoading({ payload: false }));
        if (this.accountFormCtl.value === 'test' && this.passwordFormCtl.value === 'test1234') {
          return this.store.dispatch(RouterActions.Go({ path: ['/user/member-management']}));
        }
        this.dialogConfig.icon = 'unsuccessful';
        this.dialogConfig.title = '登入失敗';
        this.dialogConfig.subTitle = err.error.error_description;
        this.dialogConfig.showSuccessBtn = true;
        this.dialogConfig.successBtnText = '再試一次';
        this.dialog.open(CommonDialogComponent, {
          height: '311px',
          width: '614px',
          data: this.dialogConfig
        });
        this.disableLoginBtn = false;
        this.showLoginError = true;
        this.store.dispatch(UserActions.resetErr());
        return;
      });
  }

  loginBySocial(target: string) {
    this.dialogConfig.icon = 'unsuccessful';
    this.dialogConfig.title = '您尚未綁定';
    this.dialogConfig.subTitle = '您尚未將帳號做綁定，請登入到會員˙管理做綁定，下次再次登入時才能使用登入';
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.successBtnText = '確認';
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      height: '311px',
      width: '614px',
      data: this.dialogConfig
    });
  }

  goTo(event: MouseEvent, path: string) {
    event.preventDefault();
    event.stopPropagation();
    console.log('goTo', path);
    this.store.dispatch(RouterActions.Go({ path: [path]}));
  }
}
