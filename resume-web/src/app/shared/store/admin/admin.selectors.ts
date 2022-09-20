import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AdminState } from './admin.state';

export const adminFeatureKey = 'admin';

export const selectAdminFeature = createFeatureSelector<AdminState>(adminFeatureKey);

export const selectErr = createSelector(
    selectAdminFeature,
    state => state.errorMessage,
);
export const selectTempAccount = createSelector(
    selectAdminFeature,
    state => state.tempAccount,
);
export const selectIsLoggedIn = createSelector(
    selectAdminFeature,
    state => state.isLoggedIn,
)
export const selectToken = createSelector(
    selectAdminFeature,
    state => state.token,
);
export const selectCurrentUser = createSelector(
    selectAdminFeature,
    state => state.currentUser,
);