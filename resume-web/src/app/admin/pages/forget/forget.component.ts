import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '@app/core';
import { ApiConfig } from '@app/core/models/Api';
import { BaseComponent } from '@app/shared';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';

@Component({
  selector: 'admin-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent extends BaseComponent implements OnInit {
  title: string = '忘記密碼';
  subtitle: string = '請輸入您註冊帳號的Email';
  btnText: string = '登入';
  otherTitle: string = '返回登入畫面';

  emailValidationForm = new FormGroup({
    emailAddress: new FormControl('', [Validators.required, Validators.email])
  });

  get emailAddressFormCtl() {
    return this.emailValidationForm.get('emailAddress') as FormControl;
  }

  getEmailAddressErrorMessage() {
    if (this.emailAddressFormCtl.hasError('required')) {
      return '請填寫此欄位'
    }
    return this.emailAddressFormCtl.hasError('email') ? '格式不正確，例:WaDaMing@gmail.com' : '';
  }

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public dataService: DataService<ApiConfig>,
  ) {
    super();
  }

  ngOnInit(): void {
  }

  sendForgetEmail(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (this.emailAddressFormCtl.invalid) {
      this.emailAddressFormCtl.markAllAsTouched();
      return;
    }

    this.dialogConfig.icon = 'success';
    this.dialogConfig.title = '信件發送成功';
    this.dialogConfig.successBtnText = '信件已發送至信箱';
    this.dialogConfig.showSuccessBtn = true;
    this.dialogConfig.successBtnText = '返回登入畫面';
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: '614px',
      data: this.dialogConfig
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.router.navigate(['/admin/login']);
      }
    })
  }
}
