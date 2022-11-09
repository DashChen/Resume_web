import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { DataService } from '@app/core';
import { ApiConfig, ResumeAutobiographiesAutobiographyCreateDto, ResumeBaseBasicsBaseBasicUpdateDto, ResumeEducationsEducationCreateDto, ResumeEducationsEducationUpdateDto, ResumeExperiencesExperienceCreateDto, ResumeExperiencesExperienceUpdateDto, ResumeLicensesLicenseCreateDto, ResumeLicensesLicenseUpdateDto, VoloAbpAccountProfilePictureType } from '@app/core/models/Api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, props, Store } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap, finalize, exhaustMap, withLatestFrom, filter } from 'rxjs/operators';
import { Actions as UserActions, Selectors as UserSelectors } from '.';
import { LoginProps } from '@app/core/interfaces/login';
import { Actions as RouterActions } from '@app/shared/store/router';
import { Actions as CommonActions } from '@app/shared/store/common';
import { sortBy } from 'lodash';

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
            this.store.dispatch(RouterActions.Go({ path: ['/user/login']}));
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
                    this.store.dispatch(CommonActions.setApiLoading({ payload: false }));
                    let url = sessionStorage.getItem('currentUrl');
                    if (!url || url === '/user/login') {
                        url = '/user/member-management';
                    }
                    this.store.dispatch(RouterActions.Go({ path: [url]}));
                    return UserActions.getUserSuccess({ payload: res.data });
                }),
                catchError(error => of(UserActions.getUserFail({ payload: error }))),
            )
        })
    ));
    // 取回基本資料
    getBasicInfo$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.getBasicInfo),
        withLatestFrom(this.store.select(UserSelectors.selectReusmeCode)),
        filter(([action, resumeCode]) => !!resumeCode),
        exhaustMap(([action, resumeCode]) => {
            console.log('getBasicInfo', resumeCode);
            return from(this.dataService.api.appBaseBasicsGetListByResumeCodeList({
                ResumeCode: resumeCode || undefined,
            },{
                headers: {
                    ...this.dataService.getAuthorizationToken('user')
                }
            })).pipe(
                map(res => {
                    console.log('getBasicInfo', res);
                    return UserActions.setResumeBasicInfo({ payload: res.data.length > 0 ? res.data[0] : {} });
                }),
                catchError(error => of(UserActions.getUserFail({ payload: error }))),
            )
        })
    ));

    // 取回學歷
    getEducations$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.getResumeEductions),
        withLatestFrom(this.store.select(UserSelectors.selectReusmeCode)),
        filter(([action, resumeCode]) => !!resumeCode),
        exhaustMap(([action, resumeCode]) => {
            console.log('getEducations', resumeCode);
            return from(this.dataService.api.appEducationsGetListByResumeCodeList({
                ResumeCode: resumeCode || undefined,
            },{
                headers: {
                    ...this.dataService.getAuthorizationToken('user')
                }
            })).pipe(
                map(res => {
                    console.log('getEducations', res);
                    return UserActions.setResumeEductions({ payload: res.data });
                }),
                catchError(error => of(UserActions.getUserFail({ payload: error }))),
            )
        })
    ));
    // 取回經歷
    getExperiences$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.getResumeExperiences),
        withLatestFrom(this.store.select(UserSelectors.selectReusmeCode)),
        filter(([action, resumeCode]) => !!resumeCode),
        exhaustMap(([action, resumeCode]) => {
            console.log('getExperiences', resumeCode);
            return from(this.dataService.api.appExperiencesGetListByResumeCodeList({
                ResumeCode: resumeCode || undefined,
            },{
                headers: {
                    ...this.dataService.getAuthorizationToken('user')
                }
            })).pipe(
                map(res => {
                    console.log('getExperiences', res);
                    return UserActions.setResumeExperiences({ payload: res.data });
                }),
                catchError(error => of(UserActions.getUserFail({ payload: error }))),
            )
        })
    ));
    // 取回專業證照
    getLicenses$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.getResumeLicenses),
        withLatestFrom(this.store.select(UserSelectors.selectReusmeCode)),
        filter(([action, resumeCode]) => !!resumeCode),
        exhaustMap(([action, resumeCode]) => {
            console.log('getLicenses', resumeCode);
            return from(this.dataService.api.appLicensesGetListByResumeCodeList({
                ResumeCode: resumeCode || undefined,
            },{
                headers: {
                    ...this.dataService.getAuthorizationToken('user')
                }
            })).pipe(
                map(res => {
                    console.log('getLicenses', res);
                    return UserActions.setResumeLicenses({ payload: res.data });
                }),
                catchError(error => of(UserActions.getUserFail({ payload: error }))),
            )
        })
    ));
    // 取回自傳
    getAutobiographies$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.getResumeAutobiographies),
        withLatestFrom(this.store.select(UserSelectors.selectReusmeCode)),
        filter(([action, resumeCode]) => !!resumeCode),
        exhaustMap(([action, resumeCode]) => {
            console.log('getAutobiographies', resumeCode);
            return from(this.dataService.api.appAutobiographiesGetListByResumeCodeList({
                ResumeCode: resumeCode || undefined,
            },{
                headers: {
                    ...this.dataService.getAuthorizationToken('user')
                }
            })).pipe(
                map(res => {
                    console.log('getAutobiographies', res);
                    return UserActions.setResumeAutobiographies({ payload: res.data });
                }),
                catchError(error => of(UserActions.getUserFail({ payload: error }))),
            )
        })
    ));
    // 取回附件
    getAppendices$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.getResumeAppendices),
        withLatestFrom(this.store.select(UserSelectors.selectReusmeCode)),
        filter(([action, resumeCode]) => !!resumeCode),
        exhaustMap(([action, resumeCode]) => {
            console.log('getAppendices', resumeCode);
            return from(this.dataService.api.appAppendicesGetListByResumeCodeList({
                ResumeCode: resumeCode || undefined,
            },{
                headers: {
                    ...this.dataService.getAuthorizationToken('user')
                }
            })).pipe(
                map(res => {
                    console.log('getAppendices', res);
                    return UserActions.setResumeAppendices({ payload: res.data });
                }),
                catchError(error => of(UserActions.getUserFail({ payload: error }))),
            )
        })
    ));
    // 取回學歷代碼
    getEductionCode$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.getEductionCodeList),
        exhaustMap(() => {
            return from(this.dataService.api.appShareCodesGetEducationCodeListList({
                headers: {
                    ...this.dataService.getAuthorizationToken('user')
                }
            })).pipe(
                map(res => {
                    // console.log('getEductionCode', res);
                    return UserActions.setEductionCodeList({ payload: sortBy(res.data.items || [], (e) => {
                        // console.log(e);
                        return parseInt(e.sort || '0');
                    }) });
                }),
                catchError(error => of(UserActions.getUserFail({ payload: error }))),
            )
        })
    ));
    // 取回畢業代碼
    getGraduateCode$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.getGraduateCodeList),
        exhaustMap(() => {
            return from(this.dataService.api.appShareCodesGetGraduateCodeListList({
                headers: {
                    ...this.dataService.getAuthorizationToken('user')
                }
            })).pipe(
                map(res => {
                    // console.log('getGraduateCode', res);
                    return UserActions.setGraduateCodeList({ payload: sortBy(res.data.items || [], (e) => {
                        // console.log(e);
                        return parseInt(e.sort || '0');
                    }) });
                }),
                catchError(error => of(UserActions.getUserFail({ payload: error }))),
            )
        })
    ));

    // 更新基本資料
    updateBasicInfo$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.updateBasicInfo),
        map(params => params.payload),
        exhaustMap((payload: {id: string; data: ResumeBaseBasicsBaseBasicUpdateDto }) => {
            return from(this.dataService.api.appBaseBasicsUpdate(payload.id, payload.data, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('updateBasicInfo', res);
                    return UserActions.setResumeBasicInfo({ payload: res.data });
                }),
                catchError(error => {
                    console.error('updateBasicInfo error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
    // 新增學歷
    createEduction$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.createEduction),
        map(params => params.payload),
        exhaustMap((payload: ResumeEducationsEducationCreateDto) => {
            return from(this.dataService.api.appEducationsCreate(payload, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('createEduction', res);
                    return UserActions.addEduction({ payload: res.data });
                }),
                catchError(error => {
                    console.error('createEduction error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
    // 更新學歷
    updateEduction$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.updateEduction),
        map(params => params.payload),
        exhaustMap((payload: {id: string, data: ResumeEducationsEducationUpdateDto}) => {
            return from(this.dataService.api.appEducationsUpdate(payload.id, payload.data, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('updateEduction', res);
                    return UserActions.updateEductionStore({ payload: res.data });
                }),
                catchError(error => {
                    console.error('updateEduction error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
    // 刪除學歷
    delEduction$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.delEduction),
        map(params => params.payload),
        exhaustMap((payload: string) => {
            return from(this.dataService.api.appEducationsDelete(payload, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('delEduction', res);
                    return UserActions.delEductionStore({ payload: payload });
                }),
                catchError(error => {
                    console.error('delEduction error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
    // 新增經歷
    createExperience$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.createExperience),
        map(params => params.payload),
        exhaustMap((payload: ResumeExperiencesExperienceCreateDto) => {
            return from(this.dataService.api.appExperiencesCreate(payload, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('createExperience', res);
                    return UserActions.addExperience({ payload: res.data });
                }),
                catchError(error => {
                    console.error('createExperience error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
    // 更新經歷
    updateExperience$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.updateExperience),
        map(params => params.payload),
        exhaustMap((payload: {id: string, data: ResumeExperiencesExperienceUpdateDto}) => {
            return from(this.dataService.api.appExperiencesUpdate(payload.id, payload.data, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('updateExperience', res);
                    return UserActions.updateExperienceStore({ payload: res.data });
                }),
                catchError(error => {
                    console.error('updateExperience error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
    // 刪除經歷
    delExperience$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.delExperience),
        map(params => params.payload),
        exhaustMap((payload: string) => {
            return from(this.dataService.api.appExperiencesDelete(payload, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('delExperience', res);
                    return UserActions.delExperienceStore({ payload: payload });
                }),
                catchError(error => {
                    console.error('delExperience error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));


    // 新增證照
    createLicense$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.createLicense),
        map(params => params.payload),
        exhaustMap((payload: ResumeLicensesLicenseCreateDto) => {
            return from(this.dataService.api.appLicensesCreate(payload, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('createLicense', res);
                    return UserActions.addLicense({ payload: res.data });
                }),
                catchError(error => {
                    console.error('createLicense error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
    updateLicense$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.updateLicense),
        map(params => params.payload),
        exhaustMap((payload: { id: string, data: ResumeLicensesLicenseUpdateDto }) => {
            return from(this.dataService.api.appLicensesUpdate(payload.id, payload.data, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('updateLicense', res);
                    return UserActions.updateLicenseStore({ payload: res.data });
                }),
                catchError(error => {
                    console.error('updateLicense error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
    // 刪除證照
    delLicense$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.delLicense),
        map(params => params.payload),
        exhaustMap((payload: string) => {
            return from(this.dataService.api.appLicensesDelete(payload, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('delLicense', res);
                    return UserActions.delLicenseStore({ payload: payload });
                }),
                catchError(error => {
                    console.error('delLicense error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));

    // 新增自傳
    createAutobiographies$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.createAutobiographies),
        map(params => params.payload),
        exhaustMap((payload: ResumeAutobiographiesAutobiographyCreateDto) => {
            return from(this.dataService.api.appAutobiographiesCreate(payload, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('createAutobiographies', res);
                    return UserActions.addAutobiographies({ payload: res.data });
                }),
                catchError(error => {
                    console.error('createAutobiographies error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
    // 更新自傳
    updateAutobiography$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.updateAutobiography),
        map(params => params.payload),
        exhaustMap((payload: { id: string, data: ResumeAutobiographiesAutobiographyCreateDto}) => {
            return from(this.dataService.api.appAutobiographiesUpdate(payload.id, payload.data, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('updateAutobiography', res);
                    return UserActions.updateAutobiographyStore({ payload: res.data });
                }),
                catchError(error => {
                    console.error('updateAutobiography error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
    // 刪除自傳
    delAutobiography$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.delAutobiography),
        map(params => params.payload),
        exhaustMap((payload: string) => {
            return from(this.dataService.api.appAutobiographiesDelete(payload, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('delAutobiography', res);
                    return UserActions.delAutobiographyStore({ payload: payload });
                }),
                catchError(error => {
                    console.error('delAutobiography error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));

    // 新增附件
    createAppendices$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.createAppendices),
        map(params => params.payload),
        exhaustMap((payload: { createFileInputWithStream?: File, query: { ResumeCode: string; AppendixName: string; AppendixContent: string } }) => {
            return from(this.dataService.api.appAppendicesCreate({
                createFileInputWithStream: payload.createFileInputWithStream,
            }, payload.query, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('createAppendices', res);
                    return UserActions.addAppendices({ payload: res.data });
                }),
                catchError(error => {
                    console.error('createAppendices error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
    // 刪除附件
    delAppendices$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.delAppendice),
        map(params => params.payload),
        exhaustMap((payload: string) => {
            return from(this.dataService.api.appAppendicesDelete(payload, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('delAppendices', res);
                    return UserActions.delAppendiceStore({ payload: payload });
                }),
                catchError(error => {
                    console.error('delAppendices error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));

    // 上傳大頭貼
    uploadProfilePicture$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.uploadProfilePicture),
        map(params => params.payload),
        exhaustMap((payload: { ImageContent: File, Type: VoloAbpAccountProfilePictureType }) => {
            return from(this.dataService.api.appRegisterSetProfilePictureCreate({
                ImageContent: payload.ImageContent,
            }, { Type: payload.Type }, {
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                tap(res => {
                    console.log('uploadProfilePicture', res);
                }),
                catchError(error => {
                    console.error('uploadProfilePicture error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
    // 取得大頭貼
    getProfilePicture$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType(UserActions.getProfilePicture),
        exhaustMap(() => {
            return from(this.dataService.api.appRegisterProfilePictureCreate({
                headers: {
                    ...this.dataService.getAuthorizationToken('user'),
                }
            })).pipe(
                map(res => {
                    console.log('getProfilePicture', res);
                    return UserActions.setProfilePicture({ payload: res.data });
                }),
                catchError(error => {
                    console.error('getProfilePicture error', error);
                    return of(UserActions.getUserFail({ payload: error }));
                }),
            )
        })
    ));
}