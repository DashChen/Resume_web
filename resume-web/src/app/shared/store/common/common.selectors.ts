import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CommonState } from './common.state';

export const featureKey = 'common';

export const selectFeature = createFeatureSelector<CommonState>(featureKey);

export const selectApiLoading = createSelector(
    selectFeature,
    state => state.isLoading,
)

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

