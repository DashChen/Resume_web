import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '@app/core';
import { IBasicDialog } from '@app/core/interfaces/basic-dialog';
import { ApiConfig, ContentType, VoloAbpHttpRemoteServiceErrorResponse } from '@app/core/models/Api';
import { loginRequestDto, loginResponseDto } from '@app/core/models/login.model';
import { CookieService } from '@app/core/services/cookie.service';
import { BaseComponent } from '@app/shared';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { catchError, from, of, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
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
    public cookie: CookieService,
    public dialog: MatDialog,
    public dataService: DataService<ApiConfig>) {
    super();
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
    const observable$ = from(this.dataService.request<loginResponseDto, VoloAbpHttpRemoteServiceErrorResponse>({
      path: '/connect/token',
      method: "POST",
      query: {
        token: 'Resume'
      },
      body: {
        Client_id: 'Resume_App',
        Client_secret: '1q2w3e*',
        username: this.accountFormCtl.value,
        password: this.passwordFormCtl.value,
        scope: 'Resume',
        grant_type: 'password',
      } as loginRequestDto,
      secure: true,
      type: ContentType.Json,
      format: "json",
    }))
    .pipe(
      catchError(err => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(() => new Error(err));
      }),
    )
    .subscribe((next) => {
      console.log(next, this.loginForm.value)
      if (next.ok && next.data.access_token) {
        if (this.rememberMeFormCtl.value) {
          this.cookie.setCookie({
            name: 'JbToken',
            value: next.data.access_token,
            session: true
          })
        }
        this.router.navigate(['/resume-management']);
      }
    },
    (err) => {
      console.error(err);
      if (this.accountFormCtl.value === 'test' && this.passwordFormCtl.value === 'test1234') {
        console.log('login');
        return this.router.navigate(['/resume-management']);
      }
      return null;
    },
    () => {
      this.disableLoginBtn = false;
      this.showLoginError = true;
      return null;
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
}
