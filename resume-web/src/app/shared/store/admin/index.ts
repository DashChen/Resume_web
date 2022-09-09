import * as Actions from './admin.actions';
import * as Reducer from './admin.reducer';
import * as Selectors from './admin.selectors';

export const storeReducer = {
    [Selectors.adminFeatureKey]: Reducer.adminReducer
}

export {
    Actions,
    Reducer,
    Selectors,
}