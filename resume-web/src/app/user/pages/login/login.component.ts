import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IBasicDialog } from '@app/core/interfaces/basic-dialog';
import { BaseComponent } from '@app/shared';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  showPassword: boolean = false;

  account = new FormControl('', [Validators.required]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  constructor(public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {}

  getAccountErrorMessage() {
    if (this.account.hasError('required')) {
      return '請填寫這個欄位';
    }

    return this.account.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return '請填寫這個欄位';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
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
