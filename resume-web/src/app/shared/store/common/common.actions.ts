import { createAction, props } from '@ngrx/store';
import { ResumeMailTplsMailTplDto, ResumeShareCodesShareCodeDto, ResumeSMSTplsSMSTplDto } from "@app/core/models/Api";

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

    RESET_ERR: '[Common] Reset error',
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

export const resetErr = createAction(
    actionType.RESET_ERR
);