import { Injectable } from '@angular/core';
import { DataService } from '@app/core';
import { ApiConfig } from '@app/core/models/Api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, props, Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap, finalize, exhaustMap } from 'rxjs/operators';
import * as CommonActions from './common.actions';

@Injectable()
export class CommonEffects {
    constructor(
        private action$: Actions,
        private store: Store,
        private dataService: DataService<ApiConfig>,
    ) { }

    stageEffect$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(CommonActions.getStageList),
        exhaustMap(() => {
            return from(this.dataService.api.appShareCodesGetStageListList({
                headers: {
                    ...this.dataService.getAuthorizationToken('admin')
                }
            })).pipe(
                map(res => {
                    return CommonActions.getStageListSuccess({ payload: res.data?.items || [] });
                }),
                catchError(error => {
                    console.error('stageEffect error', error);
                    return of(CommonActions.getStageListFail({ payload: error }));
                })
            )
        })
    ));

    writeStateEffect$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(CommonActions.getWriteStatus),
        exhaustMap(() => {
            return from(this.dataService.api.appShareCodesGetWriteStatusListList({
                headers: {
                    ...this.dataService.getAuthorizationToken('admin')
                }
            })).pipe(
                map(res => {
                    return CommonActions.getWriteStatusSuccess({ payload: res.data?.items || [] });
                }),
                catchError(error => {
                    console.error('writeStateEffect error', error);
                    return of(CommonActions.getWriteStatusFail({ payload: error }));
                })
            )
        })
    ));

    smsTplsEffect$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(CommonActions.getSmsTpl),
        exhaustMap(() => {
            return from(this.dataService.api.appSMSTplsList({}, {
                headers: {
                    ...this.dataService.getAuthorizationToken('admin')
                }
            })).pipe(
                map(res => {
                    return CommonActions.getSmsTplSuccess({ payload: res.data?.items || [] });
                }),
                catchError(error => {
                    console.error('smsTplsEffect error', error);
                    return of(CommonActions.getSmsTplFail({ payload: error }));
                })
            )
        })
    ));

    mailTplsEffect$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(CommonActions.getMailTpl),
        exhaustMap(() => {
            return from(this.dataService.api.appMailTplsList({}, {
                headers: {
                    ...this.dataService.getAuthorizationToken('admin')
                }
            })).pipe(
                map(res => {
                    return CommonActions.getMailTplSuccess({ payload: res.data?.items || [] });
                }),
                catchError(error => {
                    console.error('mailTplsEffect error', error);
                    return of(CommonActions.getMailTplFail({ payload: error }));
                })
            )
        })
    ));
}