import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, from, map, mapTo, of, tap } from 'rxjs';

import { Selectors as UserSelectors } from '@app/shared/store/user';
import { DataService } from '@app/core';
import { ApiConfig } from '@app/core/models/Api';
import { createPasswordStrengthValidator, MatchValidator } from '@app/core/validators';
import { BaseComponent } from '@app/shared';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { TermDialogComponent } from '@app/shared/dialog/term-dialog/term-dialog.component';

@Component({
  selector: 'app-register-info',
  templateUrl: './register-info.component.html',
  styleUrls: ['./register-info.component.scss']
})
export class RegisterInfoComponent extends BaseComponent implements OnInit {
  registerPhone$ = this.store.select(UserSelectors.selectRegisterPhone);
  phone: string = '';

  title: string = '註冊資訊';
  subtitle: string = '請輸入下方資訊，已完成註冊';
  showPassword: boolean = false;
  showConfirmPwd: boolean = false;

  registerForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.pattern('[\\W]+')]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]),
    confirmPwd: new FormControl('', [Validators.required, MatchValidator('password', 'confirmPwd')]),
    readOver: new FormControl(false)
  });

  get userNameFormCtl() {
    return this.registerForm.get('userName') as FormControl;
  }

  get emailAddressFormCtl() {
    return this.registerForm.get('emailAddress') as FormControl;
  }

  get passwordFormCtl() {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPwdFormCtl() {
    return this.registerForm.get('confirmPwd') as FormControl;
  }

  get readOverFormCtl() {
    return this.registerForm.get('readOver') as FormControl;
  }

  getUserNameErrorMessage() {
    if (this.userNameFormCtl.hasError('required')) {
      return '請填寫此欄位'
    }
    return this.userNameFormCtl.hasError('pattern') ? '格式不正確，請輸入文字' : '';
  }

  getEmailAddressErrorMessage() {
    if (this.emailAddressFormCtl.hasError('required')) {
      return '請填寫此欄位'
    }
    return this.emailAddressFormCtl.hasError('email') ? '格式不正確，例:WaDaMing@gmail.com' : '';
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

  getConfirmPwdErrorMessage() {
    if (this.confirmPwdFormCtl.hasError('required')) {
      return '請填寫此欄位'
    }
    return this.confirmPwdFormCtl.hasError('mismatch') ? '密碼輸入不正確' : '';
  }

  getReadOverErrorMessage() {
    return this.readOverFormCtl.hasError('required') ? '請勾選' : '';
  }

  disabledBtn: boolean = true;

  constructor(
    public router: Router,
    public override store: Store,
    public override dialog: MatDialog,
    public dataService: DataService<ApiConfig>) {
    super(store, dialog);
  }

  ngOnInit(): void {
    this.registerPhone$.subscribe(phone => this.phone = phone);
    this.registerForm.statusChanges.subscribe(status => {
      this.disabledBtn = status !== 'VALID';
    });
  }

  submitForm() {
    if (this.registerForm.valid) {
      this.disabledBtn = true;
      this.readOverFormCtl.addValidators([Validators.requiredTrue]);
      this.readOverFormCtl.updateValueAndValidity();
      if (this.readOverFormCtl.invalid) {
        return;
      }

      const observable$ = from(this.dataService.api.appRegisterResumeRegisterCreate({
        userName: this.userNameFormCtl.value,
        emailAddress: this.emailAddressFormCtl.value,
        password: this.passwordFormCtl.value,
        appName: 'MVC',
        phone: this.phone
      }))
      .pipe(
        catchError(err => of(err)),
      )
      .subscribe((next) => {
        // test
        this.dialogConfig.icon = next.ok ? 'success' : 'unsuccessful';
        this.dialogConfig.title = next.ok ? '註冊成功' : '註冊失敗';
        this.dialogConfig.subTitle = next.ok ? '您已經成功註冊帳號' : next.error.error.message;
        this.dialogConfig.showSuccessBtn = true;
        this.dialogConfig.successBtnText = next.ok ? '返回登入畫面' : '再試一次';
        const dialogRef = this.dialog.open(CommonDialogComponent, {
          height: '311px',
          width: '614px',
          data: this.dialogConfig
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result && next.ok) {
            this.router.navigate(['/user/login']);
          }
        });
      },
      (err) => {
        console.error(err);
      },
      () => {
        this.disabledBtn = false;
      });
    }
  }

  showTerms(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dialog.open(TermDialogComponent, {
      width: '614px',
      height: '320px'
    })
  }
}
