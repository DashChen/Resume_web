import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '@app/core';
import { ApiConfig } from '@app/core/models/Api';
import { BaseComponent } from '@app/shared';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { Store } from '@ngrx/store';
import { from, catchError, of, throwError } from 'rxjs';
import { Actions as RouterActions } from '@app/shared/store/router';

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
    public override store: Store,
    public override dialog: MatDialog,
    public dataService: DataService<ApiConfig>,
  ) {
    super(store, dialog);
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
    from(this.dataService.api.appRegisterResumeMailVerifyCodeCreate({
      Email: this.emailAddressFormCtl.value,
    }))
    .pipe(
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
      }),
    ).subscribe((next) => {
      // console.log(next);
      if (next.ok) {
        this.dialogConfig.icon ='success';
        this.dialogConfig.title ='信件發送成功';
        this.dialogConfig.subTitle ='信件已發送至信箱';
        this.dialogConfig.successBtnText ='返回登入畫面';
        this.dialogConfig.showSuccessBtn = true;

        const dialogRef = this.dialog.open(CommonDialogComponent, {
          width: '614px',
          data: this.dialogConfig
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.store.dispatch(RouterActions.Go({path: ['/admin/login']}));
          }
        });
      }
    },
    (err: Error) => {
      this.dialogConfig.icon = 'unsuccessful';
      this.dialogConfig.title = '信件發送失敗';
      this.dialogConfig.subTitle = err.message;
      this.dialogConfig.showSuccessBtn = true;
      this.dialogConfig.successBtnText = '再試一次';
      this.dialog.open(CommonDialogComponent, {
        height: '311px',
        width: '614px',
        data: this.dialogConfig
      });
      return null;
    },
    () => {
      return null;
    });
  }
}
