import * as AdminStore from './admin';
import * as UserStore from './user';

export default {
    ...AdminStore.storeReducer,
    ...UserStore.storeReducer,
}