import * as Actions from './router.actions';
import * as Effects from './router.effects';
import * as Reducer from './router.reducer';
import * as Selectors from './router.selectors';

export const storeReducer = {
    [Selectors.featureKey]: Reducer.reducer
}

export {
    Actions,
    Effects,
    Reducer,
    Selectors,
}