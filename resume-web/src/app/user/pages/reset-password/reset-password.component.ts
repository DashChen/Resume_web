import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Selectors as UserSelectors } from '@app/shared/store/user';
import { DataService } from '@app/core';
import { ApiConfig } from '@app/core/models/Api';
import { createPasswordStrengthValidator, MatchValidator } from '@app/core/validators';
import { BaseComponent } from '@app/shared';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { catchError, finalize, from, of, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions as CommonActions } from '@app/shared/store/common';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends BaseComponent implements OnInit {
  tempAccount$ = this.store.select(UserSelectors.selectTempAccount);
  tempAccount: string = '';

  title: string = '重新設定密碼';
  showPassword: boolean = false;
  showConfirmPwd: boolean = false;
  otherTitle: string = '還沒有帳號?';
  otherSubtitle: string = '立即註冊';

  resetForm = new FormGroup({
    password: new FormControl('', [Validators.required, createPasswordStrengthValidator()]),
    confirmPwd: new FormControl('', [Validators.required, MatchValidator('password', 'confirmPwd')]),
  });

  get passwordFormCtl() {
    return this.resetForm.get('password') as FormControl;
  }

  get confirmPwdFormCtl() {
    return this.resetForm.get('confirmPwd') as FormControl;
  }

  getPasswordErrorMessage() {
    if (this.passwordFormCtl.hasError('required')) {
      return '請填寫此欄位'
    }
    return this.passwordFormCtl.hasError('passwordStrength') ? '密碼設定長度至少為8個字元的字串' : '';
  }

  getConfirmPwdErrorMessage() {
    if (this.confirmPwdFormCtl.hasError('required')) {
      return '請填寫此欄位'
    }
    return this.confirmPwdFormCtl.hasError('mismatch') ? '密碼輸入不正確' : '';
  }

  disabledBtn: boolean = false;

  constructor(
    public router: Router,
    public override store: Store,
    public override dialog: MatDialog,
    public dataService: DataService<ApiConfig>) {
    super(store, dialog);
  }

  ngOnInit(): void {
      this.tempAccount$.subscribe(account => this.tempAccount = account);
  }

  submitForm() {
    if (this.resetForm.valid) {
      this.disabledBtn = true;

      const request$ = from(this.dataService.api.appRegisterResumeResetPasswordCreate({
        PhoneOrEmail: this.tempAccount,
        newPassword: this.passwordFormCtl.value,
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
          this.disabledBtn = false;
          request$.unsubscribe();
        }),
      ).subscribe(
        (next: any) => {
        console.log(next);
        this.dialogConfig.icon = next.data ? 'success' : 'unsuccessful';
        this.dialogConfig.title = next.data ? '密碼設定成功' : '密碼設定失敗';
        this.dialogConfig.subTitle = '您的密碼' + (next.data ? '設定成功' : (next.error?.error.message || '設定失敗'));
        this.dialogConfig.showSuccessBtn = true;
        this.dialogConfig.successBtnText = next.data ? '返回登入畫面' : '再試一次';
        const dialogRef = this.dialog.open(CommonDialogComponent, {
          height: '311px',
          width: '614px',
          data: this.dialogConfig
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result && next.ok && next.data) {
            this.router.navigate(['/user/login']);
          }
        });
      });
    }
  }
}

