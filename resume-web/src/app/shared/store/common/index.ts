import * as Actions from './common.actions';
import * as Effects from './common.effects';
import * as Reducer from './common.reducer';
import * as Selectors from './common.selectors';

export const storeReducer = {
    [Selectors.featureKey]: Reducer.commonReducer
}

export {
    Actions,
    Effects,
    Reducer,
    Selectors,
}