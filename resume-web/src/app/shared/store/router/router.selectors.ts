import { createSelector } from '@ngrx/store';
import { getRouterState } from './router.reducer';

export const featureKey = 'routerReducer';

export const selectCurrentUrl = createSelector(
    getRouterState,
    state => state?.state.url,
);