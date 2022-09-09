import * as Actions from './user.actions';
import * as Reducer from './user.reducer';
import * as Selectors from './user.selectors';

export const storeReducer = {
    [Selectors.featureKey]: Reducer.userReducer
}

export {
    Actions,
    Reducer,
    Selectors,
}