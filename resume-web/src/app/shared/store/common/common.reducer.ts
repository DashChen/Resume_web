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
    // 錯誤
    errorMessage: null,
}

export const commonReducer = createReducer(
    initialState,
    on(CommonActions.setApiLoading, (state, { payload }) => ({ ...state, isLoading: payload })),
    on(CommonActions.getStageListSuccess, (state, { payload }) => ({ ...state, stageList: payload })),
    on(CommonActions.getWriteStatusSuccess, (state, { payload }) => ({ ...state, writeStatusList: payload })),
    on(CommonActions.getSmsTplSuccess, (state, { payload }) => ({ ...state, smsTpls: payload })),
    on(CommonActions.getMailTplSuccess, (state, { payload }) => ({ ...state, mailTpls: payload })),
    // error
    on(CommonActions.getStageListFail, (state, { payload }) => ({ ...state, errorMessage: payload  })),
    on(CommonActions.getWriteStatusFail, (state, { payload }) => ({ ...state, errorMessage: payload  })),
    on(CommonActions.getSmsTplFail, (state, { payload }) => ({ ...state, errorMessage: payload  })),
    on(CommonActions.getMailTplFail, (state, { payload }) => ({ ...state, errorMessage: payload  })),
    // reset
    on(CommonActions.resetErr, (state) => ({ ...state, errorMessage: null })),
);