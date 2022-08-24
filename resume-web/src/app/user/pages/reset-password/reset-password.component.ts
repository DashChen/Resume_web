import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '@app/core';
import { ApiConfig } from '@app/core/models/Api';
import { createPasswordStrengthValidator, MatchValidator } from '@app/core/validators';
import { BaseComponent } from '@app/shared';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { catchError, from, of, tap } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends BaseComponent {
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
      return '請輸入關鍵字'
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
    public dialog: MatDialog,
    public dataService: DataService<ApiConfig>) {
    super();
  }

  submitForm() {
    if (this.resetForm.valid) {
      this.disabledBtn = true;

      const observable$ = from(this.dataService.api.accountResetPasswordCreate({
        resetToken: '',
        password: this.passwordFormCtl.value,
      }))
      .pipe(
        catchError(err => of(err)),
        tap((err) => {
          console.error(err)
        })
      )
      .subscribe((next: any) => {
        // test
        next = {ok: true};
        this.dialogConfig.icon = next.ok ? 'success' : 'unsuccessful';
        this.dialogConfig.title = next.ok ? '密碼設定成功' : '密碼設定失敗';
        this.dialogConfig.subTitle = next.ok ? '您的密碼設定成功' : next.error.error.message;
        this.dialogConfig.showSuccessBtn = true;
        this.dialogConfig.successBtnText = next.ok ? '返回登入畫面' : '再試一次';
        const dialogRef = this.dialog.open(CommonDialogComponent, {
          height: '311px',
          width: '614px',
          data: this.dialogConfig
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result && next.ok) {
            this.router.navigate(['/login']);
          }
        });
      });
    }
  }
}

