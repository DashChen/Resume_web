import { LoginProps } from '@app/core/interfaces/login';
import { ResumeUserDatasUserDto } from '@app/core/models/Api';
import { loginResponseDto } from '@app/core/models/login.model';
import { createAction, props } from '@ngrx/store';

export const actionType = {
    LOGIN: '[Admin Login Page] Login effect',
    LOGIN_SUCCESS: '[Admin Login Page] Login success',
    LOGIN_FAIL: '[Admin Login Page] Login fail',

    LOGOUT: '[Admin Page] Logout effect',
    LOGOUT_SUCCESS: '[Admin Page] Logout success',
    LOGOUT_FAIL: '[Admin Page] Logout fail',

    SET_TOKEN: '[Admin Page] Set token',

    GET_USER: '[Admin Page] Get Admin Data',
    GET_USER_SUCCESS: '[Admin Page] Get Admin Data success',
    GET_USER_FAIL: '[Admin Page] Get Admin Data fail',

    SET_TEMP_ACCOUNT: '[Admin Forget Page] Set Temp Account',

    RESET_ERR: '[Admin] Reset error',
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