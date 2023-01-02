import { Injectable, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { filter, interval, of, pipe } from 'rxjs';
import { Selectors as RouterSelectors } from '@app/shared/store/router';
import { Actions as UserActions, Selectors as UserSelectors } from '@app/shared/store/user';
import { Actions as CommonActions } from '@app/shared/store/common';
import { Actions as AdminActions, Selectors as AdminSelectors } from '@app/shared/store/admin';
import { HelperService } from '.';
import { SocialAuthService } from '../social-login/social-auth.service';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(
    private store: Store,
    private cookie: CookieService,
    private helperService: HelperService,
    private _authService: SocialAuthService,
  ) { }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      const queryObj = this.helperService.getParamsAsObject(location.search);
      console.log('startup service href', window.location.href, queryObj);
      if (queryObj['provider']) {
        // 確認 state 是否存在
        let state = localStorage.getItem(`${queryObj['provider']}_state`);
        if (state && state != queryObj['state']) {
          console.log('state no equal');
        }
        this._authService.parseSocialUser(queryObj['provider'], queryObj);
      }
      const isAdmin = window.location.pathname.includes('admin') || false;
      const token = sessionStorage.getItem('JbToken') || this.cookie.get('JbToken');
      const invitationCode = queryObj['invitationCode'];
      if (!!invitationCode && !isAdmin) {
        this.store.dispatch(UserActions.setInvitationCode({ payload: invitationCode }));
      }
      if (!token) {
        this.checkStatus(isAdmin);
        return resolve('no token or token expired');
      }
      this.store.dispatch(CommonActions.setApiLoading({ payload: true }));
      if (isAdmin) {
        this.store.dispatch(CommonActions.setAdmin({ payload: true }));
        // 取管理者 data
        this.store.dispatch(AdminActions.setToken({
          payload: {
            token_type: 'bearer',
            access_token: token,
            scope: 'Resume',
            expires_in: 24 * 60 * 60
          }
        }));
        this.store.select(AdminSelectors.selectIsLoggedIn).pipe(
          filter(status => status)
        ).subscribe(res => {
          if (res) {
            interval(1000 * 60 * 5).subscribe(() => {
              this.checkStatus(isAdmin);
            });
          }
          // 取回使用者資料
          this.store.dispatch(AdminActions.getUserAction());
          resolve(res);
        });
      } else {
        this.store.dispatch(CommonActions.setAdmin({ payload: false }));
        this.store.dispatch(UserActions.setToken({
          payload: {
            token_type: 'bearer',
            access_token: token,
            scope: 'Resume',
            expires_in: 24 * 60 * 60
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
    if (!sessionStorage.getItem('JbToken') && !this.cookie.check('JbToken')) {
      if (isAdmin) {
        this.store.dispatch(AdminActions.logout());
      } else {
        this.store.dispatch(UserActions.logout());
      }
    }
  }
}
