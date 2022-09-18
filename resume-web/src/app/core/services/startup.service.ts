import { Injectable, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { filter, interval, of, pipe } from 'rxjs';
import { Selectors as RouterSelectors } from '@app/shared/store/router';
import { Actions as UserActions, Selectors as UserSelectors } from '@app/shared/store/user';

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
      if (this.cookie.check('JbToken')) {
        if (isAdmin) {
          // TODO 取管理者 data
        } else {
          // TODO 先設定 token
          this.cookie.get('JbToken');

          this.store.dispatch(UserActions.getUserAction());
          return this.store.select(UserSelectors.selectIsLoggedIn).pipe(
            filter(status => status)
          ).subscribe(res => {
            if (res) {
              interval(1000 * 60 * 5).subscribe(() => {
                this.checkStatus(isAdmin);
              });
            }
            resolve(res);
          })
        }
      }
      this.checkStatus(isAdmin);
      return resolve('no token or token expired');
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
