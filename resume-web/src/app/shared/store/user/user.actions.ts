import { createAction, props } from '@ngrx/store';
import { VoloAbpIdentityIdentityUserDto } from '@app/core/models/Api';

export const setRegisterPhone = createAction(
    '[Register Page] Set Phone',
    props<{ phone: string; }>()
);

export const setTempAccount = createAction(
    '[Forget Page] Set Temp Account',
    props<{ account: string }>()
);

export const setLoggedIn = createAction(
    '[Login Page] Set Logged In',
    props<{ logged: boolean}>()
);

export const setUser = createAction(
    '[Login Page] Set User Data',
    props<{ data: VoloAbpIdentityIdentityUserDto }>()
);