import { createReducer, on } from '@ngrx/store';
import { VoloAbpIdentityIdentityUserDto } from '@app/core/models/Api';
import { UserState } from './user.state';
import * as UserActions from './user.actions';

export const initialState: UserState = {
    registerPhone: '',
    tempAccount: '',
    isLoggedIn: false,
    currentUser: {} as VoloAbpIdentityIdentityUserDto,
}

export const userReducer = createReducer(
    initialState,
    on(UserActions.setRegisterPhone, (state, { phone }) => ({ ...state, registerPhone: phone }) ),
    on(UserActions.setTempAccount, (state, { account }) => ({ ...state, tempAccount: account })),
    on(UserActions.setLoggedIn, (state, { logged }) => ({ ...state, isLoggedIn: logged})),
    on(UserActions.setUser, (state, { data }) => ({ ...state, currentUser: data, isLoggedIn: true})),
);