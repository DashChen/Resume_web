import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { DataService } from '@app/core';
import { ApiConfig } from '@app/core/models/Api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, props, Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap, finalize, exhaustMap } from 'rxjs/operators';
import { Actions as UserActions, Selectors as UserSelectors } from '.';
import { LoginProps } from '@app/core/interfaces/login';
import { Actions as RouterActions } from '@app/shared/store/router';

@Injectable()
export class UserEffects {
    constructor(
        private action$: Actions,
        private store: Store,
        private dataService: DataService<ApiConfig>,
        private cookie: CookieService,
    ) { }

    loginEffect$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.loginAction),
        map(params => params.payload),
        exhaustMap((payload: LoginProps) => {
            return from(this.dataService.getToken({ username: payload.username, password: payload.password })).pipe(
                map(res => {
                    console.log('loginEffect', res);
                    if (payload.rememberMe) {
                        console.log('remember me set token');
                        this.cookie.set('JbToken', res.data.access_token, {
                            expires: ((res.data.expires_in || 0) / 60 / 60 / 24) || 1,
                            sameSite: 'Strict',
                          });
                    }
                    // session storage
                    sessionStorage.setItem('JbToken', res.data.access_token);
                    return UserActions.setToken({ payload: res.data });
                }),
                catchError(error => {
                    console.error('loginEffect error', error);
                    return of(UserActions.loginFail({ payload: error }));
                }),
            )
        })
    ));

    logoutEffect$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.logout),
        map(() => {
            this.cookie.delete('JbToken');
            sessionStorage.clear();
            this.store.dispatch(RouterActions.Go({ path: ['/login']}));
            return UserActions.logoutSuccess();
        })
    ))

    getUserEffect$ = createEffect(() => this.action$.pipe(
        ofType(UserActions.getUserAction),
        exhaustMap(() => {
            return from(this.dataService.api.appUserDatasGetDataByAccountIdList({
                headers: {
                    ...this.dataService.getAuthorizationToken('user')
                }
            })).pipe(
                map(res => {
                    console.log('getUserEffect', res);
                    this.store.dispatch(RouterActions.Go({ path: ['/user/member-management']}));
                    return UserActions.getUserSuccess({ payload: res.data });
                }),
                catchError(error => of(UserActions.getUserFail({ payload: error }))),
            )
        })
    ));
}