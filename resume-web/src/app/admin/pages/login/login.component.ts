import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '@app/core';
import { ApiConfig } from '@app/core/models/Api';
import { BaseComponent } from '@app/shared';
import { catchError, from, of, tap } from 'rxjs';

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
    public dialog: MatDialog,
    public dataService: DataService<ApiConfig>) {
    super();
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
    const observable$ = from(this.dataService.api.accountLoginCreate(this.loginForm.value))
    .pipe(
      catchError(err => of(err)),
      tap((err) => {
        console.error(err)
      })
    )
    .subscribe((next) => {
      this.disableLoginBtn = false;
      if (this.accountFormCtl.value === 'admin' && this.passwordFormCtl.value === 'admin1234') {
        console.log('login');
        return this.router.navigate(['/admin/company-job']);
      }
      this.showLoginError = true;
      return null;
    });
  }
}
