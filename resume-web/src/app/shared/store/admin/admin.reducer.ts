import { createReducer, on } from '@ngrx/store';
import { AdminState } from './admin.state';
import * as AdminActions from './admin.actions';
import { ResumeUserDatasUserDto } from '@app/core/models/Api';
import { loginResponseDto } from '@app/core/models/login.model';

export const initialState: AdminState = {
    tempAccount: '',
    isLoggedIn: false,
    token: {} as loginResponseDto,
    currentUser: {} as ResumeUserDatasUserDto,
    errorMessage: null,
    selectedPerson: []
}

export const adminReducer = createReducer(
    initialState,
    on(AdminActions.setTempAccount, (state, { payload }) => ({ ...state, tempAccount: payload})),
    on(AdminActions.setToken, (state, { payload }) => ({ ...state, token: payload, isLoggedIn: true })),
    on(AdminActions.getUserSuccess, (state, { payload }) => ({ ...state, currentUser: payload })),
    on(AdminActions.logoutSuccess, (state) => ({ ...state, isLoggedIn: false, token: null, currentUser: null })),
    on(AdminActions.setResumePerson, (state, { payload }) => ({ ...state, selectedPerson: payload })),
    // error
    on(AdminActions.loginFail, (state, { payload }) => ({ ...state, errorMessage: payload })),
    on(AdminActions.getUserFail, (state, { payload }) => ({ ...state, errorMessage: payload })),
    // reset
    on(AdminActions.resetErr, (state) => ({ ...state, errorMessage: null })),
);