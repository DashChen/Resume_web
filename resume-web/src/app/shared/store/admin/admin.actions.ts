import { createAction, props } from '@ngrx/store';

export const setTempAccount = createAction(
    '[Admin Forget Page] Set Admin Temp Account',
    props<{ account: string }>()
);

export const setLoggedIn = createAction(
    '[Admin Login Page] Set Admin Logged In',
    props<{ logged: boolean}>()
);