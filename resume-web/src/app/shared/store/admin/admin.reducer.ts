import { createReducer, on } from '@ngrx/store';
import { AdminState } from './admin.state';
import * as AdminActions from './admin.actions';

export const initialState: AdminState = {
    tempAccount: '',
    isLoggedIn: false,
}

export const adminReducer = createReducer(
    initialState,
    on(AdminActions.setTempAccount, (state, { account }) => ({ ...state, tempAccount: account})),
    on(AdminActions.setLoggedIn, (state, { logged }) => ({ ...state, isLoggedIn: logged})),
);