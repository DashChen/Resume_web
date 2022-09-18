import { createAction, props } from '@ngrx/store';
import { ResumeUserDatasUserDto } from '@app/core/models/Api';
import { loginResponseDto } from '@app/core/models/login.model';
import { LoginProps } from '@app/core/interfaces/login';

export const actionType = {
    LOGIN: '[User Login Page] Login effect',
    LOGIN_SUCCESS: '[User Login Page] Login success',
    LOGIN_FAIL: '[User Login Page] Login fail',

    LOGOUT: '[User Page] Logout effect',
    LOGOUT_SUCCESS: '[User Page] Logout success',
    LOGOUT_FAIL: '[User Page] Logout fail',

    SET_TOKEN: '[User Page] Set token',

    GET_USER: '[User Page] Get User Data',
    GET_USER_SUCCESS: '[User Page] Get User Data success',
    GET_USER_FAIL: '[User Page] Get User Data fail',

    SET_PHONE: '[Register Page] Set Phone',
    SET_TEMP_ACCOUNT: '[Forget Page] Set Temp Account',

    RESET_ERR: '[User] Reset error',
}

export const loginAction = createAction(
    actionType.LOGIN,
    props<{ payload: LoginProps }>()
);

export const loginSuccess = createAction(
    actionType.LOGIN_SUCCESS,
    props<{ payload: string }>(),
)

export const loginFail = createAction(
    actionType.LOGIN_FAIL,
    props<{ payload: any }>()
)

export const logout = createAction(
    actionType.LOGOUT
)

export const logoutSuccess = createAction(
    actionType.LOGOUT_SUCCESS
)

export const logoutFail = createAction(
    actionType.LOGOUT_FAIL
)

export const setRegisterPhone = createAction(
    actionType.SET_PHONE,
    props<{ payload: string; }>()
);

export const setTempAccount = createAction(
    actionType.SET_TEMP_ACCOUNT,
    props<{ payload: string }>()
);

export const setToken = createAction(
    actionType.SET_TOKEN,
    props<{ payload: loginResponseDto }>()
);

export const getUserAction = createAction(
    actionType.GET_USER
);

export const getUserSuccess = createAction(
    actionType.GET_USER_SUCCESS,
    props<{ payload: ResumeUserDatasUserDto }>()
)

export const getUserFail = createAction(
    actionType.GET_USER_FAIL,
    props<{ payload: any }>(),
)

export const resetErr = createAction(
    actionType.RESET_ERR
)