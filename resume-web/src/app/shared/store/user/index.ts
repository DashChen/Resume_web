import * as Actions from './user.actions';
import * as Effects from './user.effects';
import * as Reducer from './user.reducer';
import * as Selectors from './user.selectors';

export const storeReducer = {
    [Selectors.featureKey]: Reducer.userReducer
}

export {
    Actions,
    Effects,
    Reducer,
    Selectors,
}