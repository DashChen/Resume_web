import { Injectable } from '@angular/core';
import { DataService } from '@app/core';
import { LoginProps } from '@app/core/interfaces/login';
import { ApiConfig } from '@app/core/models/Api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap, exhaustMap } from 'rxjs/operators';
import { Actions as AdminActions } from '.';
import { Actions as RouterActions } from '@app/shared/store/router';
import { Actions as CommonActions } from '@app/shared/store/common';

@Injectable()
export class AdminEffects {
    constructor(
        private action$: Actions,
        private store: Store,
        private dataService: DataService<ApiConfig>,
        private cookie: CookieService,
    ) { }

    loginEffect$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(AdminActions.loginAction),
        map(params => params.payload),
        exhaustMap((payload: LoginProps) => {
            return from(this.dataService.getToken({ username: payload.username, password: payload.password })).pipe(
                map(res => {
                    console.log('loginEffect', res);
                    if (payload.rememberMe) {
                        console.log('admin remember me set token');
                        this.cookie.set('JbToken', res.data.access_token, {
                            expires: ((res.data.expires_in || 0) / 60 / 60 / 24) || 1,
                            sameSite: 'Strict',
                          });
                    }
                    // session storage
                    sessionStorage.setItem('JbToken', res.data.access_token);
                    return AdminActions.setToken({ payload: res.data });
                }),
                catchError(error => {
                    console.error('loginEffect error', error);
                    return of(AdminActions.loginFail({ payload: error }));
                }),
            )
        })
    ));

    logoutEffect$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(AdminActions.logout),
        map(() => {
            this.cookie.delete('JbToken');
            sessionStorage.clear();
            this.store.dispatch(RouterActions.Go({ path: ['/admin/login']}));
            return AdminActions.logoutSuccess();
        })
    ))

    getUserEffect$ = createEffect(() => this.action$.pipe(
        ofType(AdminActions.getUserAction),
        exhaustMap(() => {
            return from(this.dataService.api.appUserDatasGetDataByAccountIdList({
                headers: {
                    ...this.dataService.getAuthorizationToken('admin')
                }
            })).pipe(
                map(res => {
                    console.log('getUserEffect', res);
                    this.store.dispatch(CommonActions.setApiLoading({ payload: false }));
                    let url = sessionStorage.getItem('currentUrl');
                    if (!url || url === '/admin/login') {
                        url = '/admin/company-job';
                    }
                    this.store.dispatch(RouterActions.Go({ path: [url]}));
                    return AdminActions.getUserSuccess({ payload: res.data });
                }),
                catchError(error => of(AdminActions.getUserFail({ payload: error }))),
            )
        })
    ));
}