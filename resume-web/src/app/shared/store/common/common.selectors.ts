import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CommonState } from './common.state';

export const featureKey = 'common';

export const selectFeature = createFeatureSelector<CommonState>(featureKey);

export const selectApiLoading = createSelector(
    selectFeature,
    state => state.isLoading,
);

export const selectIsAdmin = createSelector(
    selectFeature,
    state => state.isAdmin,
);

export const selectErr = createSelector(
    selectFeature,
    state => state.errorMessage,
);

export const selectStageList = createSelector(
    selectFeature,
    state => state.stageList,
);

export const selectWriteStatusList = createSelector(
    selectFeature,
    state => state.writeStatusList,
);

export const selectSmsTpls = createSelector(
    selectFeature,
    state => state.smsTpls,
);

export const selectMailTpls = createSelector(
    selectFeature,
    state => state.mailTpls,
);

export const selectSexList = createSelector(
    selectFeature,
    state => state.sexList,
);

export const selectAreaList = createSelector(
    selectFeature,
    state => state.areasList,
);

export const selectMainAreas = createSelector(
    selectFeature,
    state => state.mainAreas,
);

export const selectSkillsList = createSelector(
    selectFeature,
    state => state.skillsList,
);

export const selectMainSkills = createSelector(
    selectFeature,
    state => state.mainSkills,
);

export const selectThirdPartyCodes = createSelector(
    selectFeature,
    state => state.thirdPartyCodes,
);

export const selectResumeCode = createSelector(
    selectFeature,
    state => state.resumeCode,
);