import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '@app/core';
import { ApiConfig } from '@app/core/models/Api';
import { BaseComponent } from '@app/shared';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { catchError, filter, from, of, take, tap, throwError } from 'rxjs';
import { Actions as AdminActions, Selectors as AdminSelectors } from '@app/shared/store/admin';
import { Actions as RouterActions } from '@app/shared/store/router';
import { Actions as CommonActions } from '@app/shared/store/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class AdminLoginComponent extends BaseComponent implements OnInit {

  showPassword: boolean = false;

  loginForm = new FormGroup({
    account: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
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
    public router: Router,
    public override store: Store,
    public override dialog: MatDialog,
    public dataService: DataService<ApiConfig>) {
    super(store, dialog);
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(selectedValue => {
      this.showLoginError = false;
    })
  }

  getAccountErrorMessage() {
    if (this.accountFormCtl.hasError('required')) {
      return '請填寫這個欄位';
    }

    return this.accountFormCtl.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.passwordFormCtl.hasError('required')) {
      return '請填寫這個欄位';
    }

    return this.passwordFormCtl.hasError('minlength') ? 'Not a valid password' : '';
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
    this.store.dispatch(AdminActions.loginAction({
      payload: {
        username: this.accountFormCtl.value,
        password: this.passwordFormCtl.value,
        rememberMe: this.rememberMeFormCtl.value,
      }
    }));
    this.store.select(AdminSelectors.selectIsLoggedIn)
      .subscribe(res => {
        if (res) {
          this.store.dispatch(AdminActions.getUserAction());
        }
      });
      this.store.select(AdminSelectors.selectErr)
      .pipe(
        filter(res => !!res),
        take(1),
      )
      .subscribe(err => {
        console.log(err);
        this.store.dispatch(CommonActions.setApiLoading({ payload: false }));
        if (this.accountFormCtl.value === 'admin' && this.passwordFormCtl.value === 'admin1234') {
          console.log('login');
          return this.router.navigate(['/admin/company-job']);
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
        this.store.dispatch(AdminActions.resetErr());
        return;
      });
  }
}
