import { createReducer, on } from '@ngrx/store';
import { ResumeBaseBasicsBaseBasicDto, ResumeUserDatasUserDto, VoloAbpIdentityIdentityUserDto } from '@app/core/models/Api';
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
    resumeTitle: '',
    resumeBasicInfo: {} as ResumeBaseBasicsBaseBasicDto,
    resumeEductions: [],
    resumeExperiences: [],
    resumeLicenses: [],
    resumeAutobiographies: [],
    resumeAppendices: [],
    eductionCodeList: [],
    graduateCodeList: [],
    profilePicture: {},
    invitationCode: ''
}

export const userReducer = createReducer(
    initialState,
    on(UserActions.setRegisterPhone, (state, { payload }) => ({ ...state, registerPhone: payload }) ),
    on(UserActions.setTempAccount, (state, { payload }) => ({ ...state, tempAccount: payload })),
    on(UserActions.setToken, (state, { payload }) => ({ ...state, token: payload, isLoggedIn: true })),
    on(UserActions.getUserSuccess, (state, { payload }) => ({ ...state, currentUser: payload })),
    on(UserActions.logoutSuccess, (state) => ({ ...state, isLoggedIn: false, token: null, currentUser: null })),
    on(UserActions.setReusmeTitle, (state, { payload }) => ({ ...state, resumeTitle: payload })),
    on(UserActions.setResumeBasicInfo, (state, { payload }) => ({ ...state, resumeBasicInfo: payload })),
    on(UserActions.setResumeEductions, (state, { payload }) => ({ ...state, resumeEductions: payload })),
    on(UserActions.setResumeExperiences, (state, { payload }) => ({ ...state, resumeExperiences: payload })),
    on(UserActions.setResumeLicenses, (state, { payload }) => ({ ...state, resumeLicenses: payload })),
    on(UserActions.setResumeAutobiographies, (state, { payload }) => ({ ...state, resumeAutobiographies: payload })),
    on(UserActions.setResumeAppendices, (state, { payload }) => ({ ...state, resumeAppendices: payload })),
    on(UserActions.setEductionCodeList, (state, { payload }) => ({ ...state, eductionCodeList: payload })),
    on(UserActions.setGraduateCodeList, (state, { payload }) => ({ ...state, graduateCodeList: payload })),

    on(UserActions.addExperience, (state, { payload }) => ({ ...state, resumeExperiences: [...state.resumeExperiences, payload] })),
    on(UserActions.addEduction, (state, { payload }) => ({ ...state, resumeEductions: [...state.resumeEductions, payload] })),
    on(UserActions.addLicense, (state, { payload }) => ({ ...state, resumeLicenses: [...state.resumeLicenses, payload] })),
    on(UserActions.addAutobiographies, (state, { payload }) => ({ ...state, resumeAutobiographies: [...state.resumeAutobiographies, payload] })),
    on(UserActions.addAppendices, (state, { payload }) => ({ ...state, resumeAppendices: [...state.resumeAppendices, payload] })),
    on(UserActions.setProfilePicture, (state, { payload }) => ({ ...state, profilePicture: payload })),
    on(UserActions.setInvitationCode, (state, { payload }) => ({ ...state, invitationCode: payload })),

    on(UserActions.updateEductionStore, (state, { payload }) => {
        const index = state.resumeEductions.findIndex(_item => _item.id === payload.id);
        let items = [...state.resumeEductions];
        if (index > -1) {
            items.splice(index, 1, payload);
        }
        return {...state, resumeEductions: [...items]};
    }),
    on(UserActions.updateExperienceStore, (state, { payload }) => {
        const index = state.resumeExperiences.findIndex(_item => _item.id === payload.id);
        let items = [...state.resumeExperiences];
        if (index > -1) {
            items.splice(index, 1, payload);
        }
        return {...state, resumeExperiences: [...items]};
    }),
    on(UserActions.updateAutobiographyStore, (state, { payload }) => {
        const index = state.resumeAutobiographies.findIndex(_item => _item.id === payload.id);
        let items = [...state.resumeAutobiographies];
        if (index > -1) {
            items.splice(index, 1, payload);
        }
        return {...state, resumeAutobiographies: [...items]};
    }),

    on(UserActions.delEductionStore, (state, { payload }) => {
        const index = state.resumeEductions.findIndex(_item => _item.id === payload);
        let items = [...state.resumeEductions];
        if (index > -1) {
            items.splice(index, 1);
        }
        return {...state, resumeEductions: [...items]};
    }),
    on(UserActions.delExperienceStore, (state, { payload }) => {
        const index = state.resumeExperiences.findIndex(_item => _item.id === payload);
        let items = [...state.resumeExperiences];
        if (index > -1) {
            items.splice(index, 1);
        }
        return {...state, resumeExperiences: [...items]};
    }),
    on(UserActions.delLicenseStore, (state, { payload }) => {
        const index = state.resumeLicenses.findIndex(_item => _item.id === payload);
        let items = [...state.resumeLicenses];
        if (index > -1) {
            items.splice(index, 1);
        }
        return {...state, resumeLicenses: [...items]};
    }),
    on(UserActions.delAutobiographyStore, (state, { payload }) => {
        const index = state.resumeAutobiographies.findIndex(_item => _item.id === payload);
        let items = [...state.resumeAutobiographies];
        if (index > -1) {
            items.splice(index, 1);
        }
        return {...state, resumeAutobiographies: [...items]};
    }),
    on(UserActions.delAppendiceStore, (state, { payload }) => {
        const index = state.resumeAppendices.findIndex(_item => _item.id === payload);
        let items = [...state.resumeAppendices];
        if (index > -1) {
            items.splice(index, 1);
        }
        return {...state, resumeAppendices: [...items]};
    }),

    // error
    on(UserActions.loginFail, (state, { payload }) => ({ ...state, errorMessage: payload })),
    on(UserActions.getUserFail, (state, { payload }) => ({ ...state, errorMessage: payload })),
    // reset
    on(UserActions.resetErr, (state) => ({ ...state, errorMessage: null })),
);