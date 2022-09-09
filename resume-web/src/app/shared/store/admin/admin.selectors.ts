import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AdminState } from './admin.state';

export const adminFeatureKey = 'admin';

export const selectAdminFeature = createFeatureSelector<AdminState>(adminFeatureKey);

export const selectTempAccount = createSelector(
    selectAdminFeature,
    state => state.tempAccount,
);
export const selectIsLoggedIn = createSelector(
    selectAdminFeature,
    state => state.isLoggedIn,
)