import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '@app/core';
import { ApiConfig, ResumeUserDatasUserDto } from '@app/core/models/Api';
import { Store } from '@ngrx/store';
import { catchError, finalize, from, interval, map, Observable, startWith, take, takeUntil, tap, throwError } from 'rxjs';
import { BaseComponent } from '../base.component';
import { selectCurrentUser } from '@app/shared/store/user/user.selectors';
import { Actions as CommonActions } from '@app/shared/store/common';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-shared-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent extends BaseComponent implements OnInit {
  @Input() showCommunity: boolean = false;
  @Input() authorizeType: 'user' | 'admin' = 'user';

  currentUser$ = this.store.select(selectCurrentUser);
  user: ResumeUserDatasUserDto | null | undefined;

  Name: string = '';
  IdNo: string = '';
  Birthday: string = '';
  Phone: string = '';
  Email: string = '';
  password: string = '';
  newPassword: string = '';
  newConfirmPassword: string = '';
  hasPwd: boolean = true;

  // 三方登入用
  accountId: string = '';

  mfaGoogle: string = '';
  mfaLine: string = '';
  mfaFacebook: string = '';

  bounded = {
    email: false,
    phone: false,
    google: true,
    line: true,
    facebook: true,
  }

  focusBtnKey: string | 'Name' | 'Birthday' | 'Phone' | 'Email' |  'newPassword' = '';
  showPassword: boolean = false;
  showNewPassword: boolean = false;
  showNewConfirmPassword: boolean = false;

  requestData$: any = null;

  smsCode: string = '';
  waitVerifiedSms: boolean = false;
  timer$ = interval(1000);
  showCountdown: boolean = false;
  basicCountdown: number = 30;
  countdown: number = 30;
  disabledSendAgain: boolean = false;

  // 使否響應小版(Figma 上的SP)
  isSP: boolean = false;

  constructor(
    public override store: Store,
    public override dialog: MatDialog,
    public dataService: DataService<ApiConfig>,
    public mediaObserver: MediaObserver,
  ) {
    super(store, dialog);
    mediaObserver.asObservable().subscribe(res => {
      console.log('mediaObserver', res);
      res.forEach(mediaChange => {
        if (mediaChange.mqAlias === 'lt-md' && mediaChange.matches) {
          this.isSP = true;
        }
      })
    })
  }

  ngOnInit(): void {
    this.requestData$ = from(this.dataService.api.appUserDatasGetDataByAccountIdList({
      headers: {
        ...this.dataService.getAuthorizationToken(this.authorizeType)
      }
    })).pipe(
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
      }),
      finalize(() => { this.requestData$.unsubscribe() }),
      takeUntil(this.destroy$),
    ).subscribe(
      res => {
        console.log(res);
        this.Name = res.data.name || '';
        this.IdNo = res.data.idNo || '';
        this.Phone = res.data.phone || '';
        this.Email = res.data.email || '';
        this.Birthday = res.data.birthDay || '';
      },
      err => {
        console.log(err);
      }
    );
    this.currentUser$.subscribe(user => {
      this.user = user;
      this.store.dispatch(CommonActions.setApiLoading({ payload: false }));
    });
  }

  editMember(event: MouseEvent, type: string) {
    event.preventDefault();
    event.stopPropagation();
    if (this.focusBtnKey === '') {
      this.focusBtnKey = type;
    } else {
      let requestApi ;
      switch (type) {
        case 'Name':
          requestApi = this.dataService.api.appUserDatasUpdateNameUpdate({
            Name: this.Name
          },{
            headers: {
              ...this.dataService.getAuthorizationToken(this.authorizeType)
            }
          });
          break;
        case 'Birthday':
          requestApi = this.dataService.api.appUserDatasUpdateBirthdayUpdate({
            Birthday: this.Birthday
          },{
            headers: {
              ...this.dataService.getAuthorizationToken(this.authorizeType)
            }
          });
          break;
        case 'Email':
          requestApi = this.dataService.api.appUserDatasUpdateEmailUpdate({
            Email: this.Email
          },{
            headers: {
              ...this.dataService.getAuthorizationToken(this.authorizeType)
            }
          });
          break;
        case 'Phone':
          if (this.bounded.phone) {
            this.cancelboundMobile();
          } else {
            requestApi = this.dataService.api.appUserDatasUpdatePhoneUpdate({
              Phone: this.Phone
            },{
              headers: {
                ...this.dataService.getAuthorizationToken(this.authorizeType)
              }
            });
          }
          break;
      }
      if (requestApi) {
        const requestHttp$ = from(requestApi).pipe(
          catchError((err: HttpErrorResponse) => {
            // console.log(err);
            return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
          }),
          finalize(() => {
            this.focusBtnKey = '';
            requestHttp$.unsubscribe()
          }),
          takeUntil(this.destroy$),
        ).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        )
      }
    }
  }

  cancelboundMobile() {
    console.log('cancelboundMobile');
    const subtitle = `按下確認後即解除${this.Phone}此手機號碼，請問是否解除?`;
    const dialogRef = this.errDialog('解除綁定', subtitle, '確認', '取消');
    dialogRef.afterClosed().subscribe(
      (res) => {
        if (res) {
          // TODO 解除綁定
          this.bounded.phone = false;
          this.focusBtnKey = '';
        }
      }
    );
  }

  boundEmail() {
    // 取消按鈕
    if (this.focusBtnKey === 'Email') {
      this.focusBtnKey = '';
    } else if (this.focusBtnKey === '' && !this.isSP && !this.bounded.email) {
      // TODO 綁定信箱
      const requestHttp$ = from(this.dataService.api.appUserDatasUpdateEmailUpdate({
        Email: this.Email
      },{
        headers: {
          ...this.dataService.getAuthorizationToken(this.authorizeType)
        }
      })).pipe(
        catchError((err: HttpErrorResponse) => {
          // console.log(err);
          return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
        }),
        finalize(() => { requestHttp$.unsubscribe() }),
        takeUntil(this.destroy$),
      ).subscribe(
        res => {
          console.log(res);
          this.bounded.email = true;
          this.successDialog('系統已發出驗證信件', '麻煩至您填寫的信箱進行驗證！', '確定');
        },
        err => {
          console.log(err);
        }
      )
    } else if (this.focusBtnKey === '' && !this.isSP && this.bounded.email) {
      const subtitle = `按下確認後即解除${this.Email}此電子郵件，請問是否解除?`;
      const dialogRef = this.errDialog('解除綁定', subtitle, '確定', '取消');
      dialogRef.afterClosed().subscribe((res) => {
        console.log(res);
        if (res) {
          // TODO 解除綁定信箱
          this.bounded.email = false;
        }
      })
    }
  }

  // 傳送驗證碼
  sendSMS() {
    const requestHttp$ = from(this.dataService.api.appRegisterResumeSendVerifyCodeCreate({
      Phone: this.Phone
    }))
    .pipe(
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
      }),
      finalize(() => {
        requestHttp$.unsubscribe();
      }),
      takeUntil(this.destroy$),
    ).subscribe((next) => {
      console.log(next);
      this.showCountdown = true;
      this.countdown = 30;
      const countdown$ = this.timer$.pipe(
        map(n => this.countdown = this.basicCountdown - n - 1),
        tap(() => {
          this.disabledSendAgain = this.countdown > 0;
        }),
        take(this.basicCountdown),
        startWith(this.basicCountdown),
        finalize(() => {
          this.showCountdown = false;
          countdown$.unsubscribe();
        }),
        takeUntil(this.destroy$)
      ).subscribe();
    });
  }

  // 確認驗證碼
  verifidPhone() {
    this.waitVerifiedSms = true;
    const requestHttp$ = from(this.dataService.api.appRegisterConfirmVerifyCodeCreate({
      Phone: this.Phone,
      Code: this.smsCode,
    }))
    .pipe(
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        return throwError(() => new Error(`Error Code: ${err.status}\nMessage: ${err.error.error.message}`));
      }),
      finalize(() => {
        this.waitVerifiedSms = false;
        this.smsCode = '';
        requestHttp$.unsubscribe();
      }),
      takeUntil(this.destroy$),
    ).subscribe((next) => {
      console.log(next);
      if (next.data) {
        // TODO 是否代表綁定?
        this.focusBtnKey = '';
        this.bounded.phone = true;
      } else {
        this.errDialog('驗證失敗', '請重新輸入驗證碼!', '確定');
      }
    });
  }

  changePwd() {
    if (this.focusBtnKey === '') {
      this.focusBtnKey = 'newPassword';
    } else {

    }
  }

  boundMFA(provider: string) {
    let showCancelError = false;
    switch (provider) {
      case 'google':
        showCancelError = this.bounded.google;
        break;
      case 'line':
        showCancelError = this.bounded.line;
        break;
      case 'facebook':
        showCancelError = this.bounded.facebook;
        break;
    }
    if (showCancelError) {
      const subtitle = `按下確認後即解除${this.accountId}此帳號，請問是否解除?`;
      const dialogRef = this.errDialog('解除綁定', subtitle, '確定', '取消');
      dialogRef.afterClosed().subscribe(
        (res) => {
          if (res) {
            // TODO 三方登入解除綁定
          }
        }
      )
    } else {
      // TODO 三方登入綁定
    }
  }
}