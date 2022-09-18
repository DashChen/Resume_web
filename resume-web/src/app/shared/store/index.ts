import * as AdminStore from './admin';
import * as RouterStore from './router';
import * as UserStore from './user';

export const Effects = [
    AdminStore.Effects.AdminEffects,
    RouterStore.Effects.RouterEffects,
    UserStore.Effects.UserEffects,
];

export default {
    ...AdminStore.storeReducer,
    ...RouterStore.storeReducer,
    ...UserStore.storeReducer,
}