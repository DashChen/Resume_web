import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const featureKey = 'user';

export const selectFeature = createFeatureSelector<UserState>(featureKey);

export const selectRegisterPhone = createSelector(
    selectFeature,
    state => state.registerPhone,
);
export const selectTempAccount = createSelector(
    selectFeature,
    state => state.tempAccount,
);
export const selectIsLoggedIn = createSelector(
    selectFeature,
    state => state.isLoggedIn,
)
export const selectCurrentUser = createSelector(
    selectFeature,
    state => state.currentUser,
);