import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const featureKey = 'user';

export const selectFeature = createFeatureSelector<UserState>(featureKey);

export const selectErr = createSelector(
    selectFeature,
    state => state.errorMessage,
);
export const selectRegisterPhone = createSelector(
    selectFeature,
    state => state.registerPhone,
);
export const selectTempAccount = createSelector(
    selectFeature,
    state => state.tempAccount,
);
export const selectIsLoggedIn = createSelector(
    selectFeature,
    state => state.isLoggedIn,
)
export const selectToken = createSelector(
    selectFeature,
    state => state.token,
);
export const selectCurrentUser = createSelector(
    selectFeature,
    state => state.currentUser,
);
export const selectResumeTitle = createSelector(
    selectFeature,
    state => state.resumeTitle,
);
export const selectResumeBasicInfo = createSelector(
    selectFeature,
    state => state.resumeBasicInfo,
);
export const selectReusmeCode = createSelector(
    selectFeature,
    state => state.resumeBasicInfo?.resumeCode || null
);
export const selectResumeEductions = createSelector(
    selectFeature,
    state => state.resumeEductions
);
export const selectResumeExperiences = createSelector(
    selectFeature,
    state => state.resumeExperiences
);
export const selectResumeLicenses = createSelector(
    selectFeature,
    state => state.resumeLicenses
);
export const selectResumeAutobiographies = createSelector(
    selectFeature,
    state => state.resumeAutobiographies
);
export const selectResumeAppendices = createSelector(
    selectFeature,
    state => state.resumeAppendices
);
export const selectEductionCodeList = createSelector(
    selectFeature,
    state => state.eductionCodeList
);
export const selectGraduateCodeList = createSelector(
    selectFeature,
    state => state.graduateCodeList
);
export const selectProfilePicture = createSelector(
    selectFeature,
    state => state.profilePicture
);
export const selectInvitationCode = createSelector(
    selectFeature,
    state => state.invitationCode
);
