import { createAction, props } from '@ngrx/store';
import { ResumeMailTplsMailTplDto, ResumeShareCodesShareCodeDto, ResumeSMSTplsSMSTplDto } from "@app/core/models/Api";
import { areas, areasList } from '@app/core/interfaces/ares.model';
import { skill, skillsList } from '@app/core/interfaces/skill.model';
import { IBasicDialog } from '@app/core/interfaces/basic-dialog';

export const actionType = {
    LOADING: '[Common] API Loging',

    STAGE: '[Common] Stage list',
    STAGE_SUCCESS: '[Common] Stage get success',
    STAGE_FAIL: '[Common] Stage get fail',

    WRITE_STATE: '[Common] Write state list',
    WRITE_STATE_SUCCESS: '[Common] Write state get success',
    WRITE_STATE_FAIL: '[Common] Write state get fail',

    SMS_TPL: '[Common] SMS TPL list',
    SMS_TPL_SUCCESS: '[Common] SMS TPL get success',
    SMS_TPL_FAIL: '[Common] SMS TPL get fail',

    MAIL_TPL: '[Common] MAIL TPL list',
    MAIL_TPL_SUCCESS: '[Common] MAIL TPL get success',
    MAIL_TPL_FAIL: '[Common] MAIL TPL get fail',

    SEX: '[Common] Sex list',
    SEX_SUCCESS: '[Common] Sex list get success',
    SEX_FAIL: '[Common] Sex list get fail',

    SET_ERR: '[Common] Set error',
    SET_ERR_RES: '[Common] Set error res',
    RESET_ERR: '[Common] Reset error',

    GET_AREAS: '[Common] Get Area json',
    SET_AREAS: '[Common] Set Areas',
    SET_MAIN_AREAS: '[Common] Set main Areas',

    GET_SKILLS: '[Common] Get Skills json',
    SET_SKILLS: '[Common] Set Skills',
    SET_MAIN_SKILLS: '[Common] Set main Skills',

    GET_THIRD_PARTY_CODES: '[Common] Get third-party codes',
    SET_THIRD_PARTY_CODES: '[Common] Set third-party codes',
}

export const setApiLoading = createAction(
    actionType.LOADING,
    props<{ payload: boolean }>(),
)

export const getStageList = createAction(
    actionType.STAGE,
);

export const getStageListSuccess = createAction(
    actionType.STAGE_SUCCESS,
    props<{ payload: ResumeShareCodesShareCodeDto[] }>()
);

export const getStageListFail = createAction(
    actionType.STAGE_FAIL,
    props<{ payload: any }>()
);

export const getWriteStatus = createAction(
    actionType.WRITE_STATE,
);

export const getWriteStatusSuccess = createAction(
    actionType.WRITE_STATE_SUCCESS,
    props<{ payload: ResumeShareCodesShareCodeDto[] }>(),
);

export const getWriteStatusFail = createAction(
    actionType.WRITE_STATE_FAIL,
    props<{ payload: any }>(),
);

export const getSmsTpl = createAction(
    actionType.SMS_TPL,
);

export const getSmsTplSuccess = createAction(
    actionType.SMS_TPL_SUCCESS,
    props<{ payload: ResumeSMSTplsSMSTplDto[] | null }>(),
);

export const getSmsTplFail = createAction(
    actionType.SMS_TPL_FAIL,
    props<{ payload: any }>(),
);

export const getMailTpl = createAction(
    actionType.MAIL_TPL,
);

export const getMailTplSuccess = createAction(
    actionType.MAIL_TPL_SUCCESS,
    props<{ payload: ResumeMailTplsMailTplDto[] | null }>(),
);

export const getMailTplFail = createAction(
    actionType.MAIL_TPL_FAIL,
    props<{ payload: any }>(),
);

export const getSexList = createAction(
    actionType.SEX,
);

export const getSexListSuccess = createAction(
    actionType.SEX_SUCCESS,
    props<{ payload: ResumeShareCodesShareCodeDto[] | null }>(),
);

export const getSexListFail = createAction(
    actionType.SEX_FAIL,
    props<{ payload: any }>(),
);

export const setErr = createAction(
    actionType.SET_ERR,
    props<{ payload: {errMsg: string, data?: IBasicDialog, config?: any} }>(),
);

export const setErrRes = createAction(
    actionType.SET_ERR_RES,
    props<{ payload: any }>(),
);

export const resetErr = createAction(
    actionType.RESET_ERR
);

export const getAreas = createAction(
    actionType.GET_AREAS,
);

export const setAreas = createAction(
    actionType.SET_AREAS,
    props<{ payload: areasList[] }>(),
);

export const setMainAreas = createAction(
    actionType.SET_MAIN_AREAS,
    props<{ payload: areas[] }>(),
);

export const getSkills = createAction(
    actionType.GET_SKILLS,
);

export const setSkills = createAction(
    actionType.SET_SKILLS,
    props<{ payload: skillsList[] }>(),
);

export const setMainSkills = createAction(
    actionType.SET_MAIN_SKILLS,
    props<{ payload: skill[] }>(),
);

export const getThirdPartyCodes = createAction(
    actionType.GET_THIRD_PARTY_CODES,
);

export const setThirdPartyCodes = createAction(
    actionType.SET_THIRD_PARTY_CODES,
    props<{ payload: ResumeShareCodesShareCodeDto[] }>(),
);