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
    password: new FormControl('', [Validators.required, createPasswordStrengthValidator()]),
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
    console.log(this.userNameFormCtl.errors)
    return this.userNameFormCtl.hasError('pattern') ? '格式不正確，例:王大明' : '';
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
    return this.passwordFormCtl.hasError('passwordStrength') ? '密碼設定長度至少為8個字元的字串' : '';
  }

  getConfirmPwdErrorMessage() {
    if (this.confirmPwdFormCtl.hasError('required')) {
      return '請填寫此欄位'
    }
    return this.confirmPwdFormCtl.hasError('mismatch') ? '密碼輸入不正確' : '';
  }

  getReadOverErrorMessage() {
    console.log(this.readOverFormCtl.errors);
    return this.readOverFormCtl.hasError('required') ? '請勾選' : '';
  }

  disabledBtn: boolean = false;

  constructor(
    public router: Router,
    public store: Store,
    public dialog: MatDialog,
    public dataService: DataService<ApiConfig>) {
    super();
  }

  ngOnInit(): void {
    this.registerPhone$.subscribe(phone => this.phone = phone);
  }

  submitForm() {
    if (this.registerForm.valid) {
      this.readOverFormCtl.addValidators([Validators.requiredTrue]);
      this.readOverFormCtl.updateValueAndValidity();
      if (this.readOverFormCtl.invalid) {
        return;
      }
      this.disabledBtn = true;

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
            // user data to store
            // this.store.dispatch(setUser(next.data));
            this.router.navigate(['/login']);
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
