import { Injectable, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { filter, interval, of, pipe } from 'rxjs';
import { Selectors as RouterSelectors } from '@app/shared/store/router';
import { Actions as UserActions, Selectors as UserSelectors } from '@app/shared/store/user';
import { Actions as CommonActions } from '@app/shared/store/common';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(
    private store: Store,
    private cookie: CookieService
  ) { }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      const isAdmin = window.location.pathname.includes('admin') || false;
      const token = sessionStorage.getItem('JbToken') || this.cookie.get('JbToken');

      if (!token) {
        this.checkStatus(isAdmin);
        return resolve('no token or token expired');
      }
      this.store.dispatch(CommonActions.setApiLoading({ payload: true }));
      if (isAdmin) {
        // TODO 取管理者 data
      } else {
        this.store.dispatch(UserActions.setToken({
          payload: {
            token_type: 'bearer',
            access_token: token,
            scope: 'Resume',
            expires_in: 1 * 60 * 60
          }
        }));
        this.store.select(UserSelectors.selectIsLoggedIn).pipe(
          filter(status => status)
        ).subscribe(res => {
          if (res) {
            interval(1000 * 60 * 5).subscribe(() => {
              this.checkStatus(isAdmin);
            });
          }
          // 取回使用者資料
          this.store.dispatch(UserActions.getUserAction());
          resolve(res);
        });
      }
    })
  }

  checkStatus(isAdmin: boolean) {
    if (!this.cookie.check('JbToken')) {
      if (isAdmin) {
        // TODO Admin logout
      } else {
        console.log('checkStatus user logout');
        this.store.dispatch(UserActions.logout());
      }
    }
  }
}
