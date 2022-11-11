import { createReducer, on } from '@ngrx/store';
import { CommonState } from './common.state';
import * as CommonActions from './common.actions';

export const initialState: CommonState = {
    isLoading: false,
    // 階段列表
    stageList: [],
    // 寫入階段列表
    writeStatusList: [],
    // 簡訊樣板
    smsTpls: null,
    // 信件樣板
    mailTpls: null,
    // 性別
    sexList: null,
    // 三方列表
    thirdPartyCodes: [],
    // 錯誤
    errorMessage: null,
    skillsList: [],
    mainSkills: [],
    areasList: [],
    mainAreas: [],
}

export const commonReducer = createReducer(
    initialState,
    on(CommonActions.setApiLoading, (state, { payload }) => ({ ...state, isLoading: payload })),
    on(CommonActions.getStageListSuccess, (state, { payload }) => ({ ...state, stageList: payload })),
    on(CommonActions.getWriteStatusSuccess, (state, { payload }) => ({ ...state, writeStatusList: payload })),
    on(CommonActions.getSmsTplSuccess, (state, { payload }) => ({ ...state, smsTpls: payload })),
    on(CommonActions.getMailTplSuccess, (state, { payload }) => ({ ...state, mailTpls: payload })),
    on(CommonActions.getSexListSuccess, (state, { payload }) => ({ ...state, sexList: payload })),
    on(CommonActions.setAreas, (state, { payload }) => ({ ...state, areasList: payload })),
    on(CommonActions.setMainAreas, (state, { payload }) => ({ ...state, mainAreas: payload })),
    on(CommonActions.setSkills, (state, { payload }) => ({ ...state, skillsList: payload })),
    on(CommonActions.setMainSkills, (state, { payload }) => ({ ...state, mainSkills: payload })),
    on(CommonActions.setThirdPartyCodes, (state, { payload }) => ({ ...state, thirdPartyCodes: payload })),
    // error
    on(CommonActions.setErr, (state, { payload }) => ({ ...state, errorMessage: payload  })),
    // reset
    on(CommonActions.resetErr, (state) => ({ ...state, errorMessage: null })),
);