import { createReducer, on } from '@ngrx/store';
import { ResumeUserDatasUserDto, VoloAbpIdentityIdentityUserDto } from '@app/core/models/Api';
import { UserState } from './user.state';
import * as UserActions from './user.actions';
import { loginResponseDto } from '@app/core/models/login.model';

export const initialState: UserState = {
    registerPhone: '',
    tempAccount: '',
    isLoggedIn: false,
    token: {} as loginResponseDto,
    currentUser: {} as ResumeUserDatasUserDto,
    errorMessage: null,
}

export const userReducer = createReducer(
    initialState,
    on(UserActions.setRegisterPhone, (state, { payload }) => ({ ...state, registerPhone: payload }) ),
    on(UserActions.setTempAccount, (state, { payload }) => ({ ...state, tempAccount: payload })),
    on(UserActions.setToken, (state, { payload }) => ({ ...state, token: payload, isLoggedIn: true })),
    on(UserActions.getUserSuccess, (state, { payload }) => ({ ...state, currentUser: payload })),
    on(UserActions.logoutSuccess, (state) => ({ ...state, isLoggedIn: false, token: null, currentUser: null })),
    // error
    on(UserActions.loginFail, (state, { payload }) => ({ ...state, errorMessage: payload })),
    on(UserActions.getUserFail, (state, { payload }) => ({ ...state, errorMessage: payload })),
    // reset
    on(UserActions.resetErr, (state) => ({ ...state, errorMessage: null })),
);