import * as AdminStore from './admin';
import * as CommonStore from './common';
import * as RouterStore from './router';
import * as UserStore from './user';

export const Effects = [
    AdminStore.Effects.AdminEffects,
    CommonStore.Effects.CommonEffects,
    RouterStore.Effects.RouterEffects,
    UserStore.Effects.UserEffects,
];

export default {
    ...AdminStore.storeReducer,
    ...CommonStore.storeReducer,
    ...RouterStore.storeReducer,
    ...UserStore.storeReducer,
}