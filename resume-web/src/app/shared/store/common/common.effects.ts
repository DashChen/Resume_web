import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataService } from '@app/core';
import { area, areasList } from '@app/core/interfaces/ares.model';
import { IBasicDialog } from '@app/core/interfaces/basic-dialog';
import { skill, skillsList } from '@app/core/interfaces/skill.model';
import { ApiConfig, VoloAbpHttpRemoteServiceErrorResponse } from '@app/core/models/Api';
import { CommonDialogComponent } from '@app/shared/dialog/common-dialog/common-dialog.component';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, props, Store } from '@ngrx/store';
import { sortBy } from 'lodash';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap, finalize, exhaustMap } from 'rxjs/operators';
import * as CommonActions from './common.actions';

@Injectable()
export class CommonEffects {
    constructor(
        private action$: Actions,
        private store: Store,
        private dataService: DataService<ApiConfig>,
        public dialog: MatDialog,
    ) { }

    setErr$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(CommonActions.setErr),
        tap((res) => {
            console.log('setErr', res);
            this.dialog.open(CommonDialogComponent, {
                height: '311px',
                maxHeight: 'calc(100vh - 48px)',
                width: '614px',
                maxWidth: 'calc(100vw - 48px)',
                data: {
                    icon: 'unsuccessful',
                    title: '發生錯誤',
                    subTitle: res.payload.errMsg,
                    showSuccessBtn: true,
                    successBtnText: '關閉',
                    ...(res.payload.data || {}),
                },
                ...(res.payload.config || {})
            });
            this.store.dispatch(CommonActions.resetErr());
        })
    ), {dispatch:false});

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
                    return of(CommonActions.setErr({ payload: error }));
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
                    return of(CommonActions.setErr({ payload: error }));
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
                    return of(CommonActions.setErr({ payload: error }));
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
                    return of(CommonActions.setErr({ payload: error }));
                })
            )
        })
    ));

    sexEffect$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(CommonActions.getSexList),
        exhaustMap(() => {
            return from(this.dataService.api.appShareCodesGetSexCodeListList({
                headers: {
                    ...this.dataService.getAuthorizationToken('user')
                }
            })).pipe(
                map(res => {
                    console.log('sexEffect', res);
                    return CommonActions.getSexListSuccess({ payload: res.data?.items || [] });
                }),
                catchError(error => {
                    console.error('sexEffect error', error);
                    return of(CommonActions.setErr({ payload: error }));
                })
            )
        })
    ));

    getAreasEffect$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(CommonActions.getAreas),
        exhaustMap(() => {
            return from(this.dataService.request<areasList[], VoloAbpHttpRemoteServiceErrorResponse>({
                baseUrl: window.location.origin,
                path: `/assets/Area.json`,
                method: "GET",
                secure: true,
                format: "json",
              })).pipe(
                map(res => {
                    console.log('getAreasEffect', res);
                    if (res.data.length > 0) {
                        const mainAreas: area[] = [];
                        res.data.forEach(i => {
                            mainAreas.push({
                                no: i.no,
                                des: i.des,
                            });
                        });
                        console.log('getAreasEffect', mainAreas);
                        this.store.dispatch(CommonActions.setMainAreas({ payload: mainAreas }));
                    }
                    return CommonActions.setAreas({ payload: res.data });
                }),
                catchError(error => {
                    console.error('getAreasEffect error', error);
                    return of(CommonActions.setErr({ payload: error }));
                })
            )
        })
    ));

    getSkillsEffect$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(CommonActions.getSkills),
        exhaustMap(() => {
            return from(this.dataService.request<skillsList[], VoloAbpHttpRemoteServiceErrorResponse>({
                baseUrl: window.location.origin,
                path: `/assets/Skill.json`,
                method: "GET",
                secure: true,
                format: "json",
              })).pipe(
                map(res => {
                    console.log('getSkillsEffect', res);
                    if (res.data.length > 0) {
                        const mainSkills: skill[] = [];
                        res.data.forEach(i => {
                            mainSkills.push({
                                no: i.no,
                                des: i.des,
                            });
                        });
                        console.log('getAreasEffect', mainSkills);
                        this.store.dispatch(CommonActions.setMainSkills({ payload: mainSkills }));
                    }
                    return CommonActions.setSkills({ payload: res.data });
                }),
                catchError(error => {
                    console.error('getSkillsEffect error', error);
                    return of(CommonActions.setErr({ payload: error }));
                })
            )
        })
    ));

    // 取回三方登入列表
    getThirdPartyCodes: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(CommonActions.getThirdPartyCodes),
        exhaustMap(() => {
            return from(this.dataService.api.appShareCodesGetThirdPartyCodeListList({
                // headers: {
                //     ...this.dataService.getAuthorizationToken('user')
                // }
            })).pipe(
                map(res => {
                    return CommonActions.setThirdPartyCodes({ payload: sortBy(res?.data?.items || [], (e) => {
                        // console.log(e);
                        return parseInt(e.sort || '0');
                    }) });
                }),
                catchError(error => {
                    console.error('getThirdPartyCodes error', error);
                    return of(CommonActions.setErr({ payload: error }));
                })
            )
        })
    ));
}