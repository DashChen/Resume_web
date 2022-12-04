import { createAction, props } from '@ngrx/store';
import { ResumeAppendicesAppendixDto, ResumeAutobiographiesAutobiographyCreateDto, ResumeAutobiographiesAutobiographyDto, ResumeBaseBasicsBaseBasicDto, ResumeBaseBasicsBaseBasicUpdateDto, ResumeEducationsEducationCreateDto, ResumeEducationsEducationDto, ResumeEducationsEducationUpdateDto, ResumeExperiencesExperienceCreateDto, ResumeExperiencesExperienceDto, ResumeExperiencesExperienceUpdateDto, ResumeLicensesLicenseCreateDto, ResumeLicensesLicenseDto, ResumeLicensesLicenseUpdateDto, ResumeShareCodesShareCodeDto, ResumeUserDatasUserDto, VoloAbpAccountProfilePictureSourceDto, VoloAbpAccountProfilePictureType } from '@app/core/models/Api';
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

    SET_RESUME_TITLE: '[User Resume Management Page] Set resume title',
    SET_RESUME_CODE: '[User Resume Management Page] Set resume code',
    // 履歷基本資料
    GET_RESUME_BASIC_INFO: '[User Resume Management Page] Get resume basic info',
    SET_RESUME_BASIC_INFO: '[User Resume Management Page] Set resume basic info',
    UPDATE_RESUME_BASIC_INFO: '[User Resume Management Page] Update resume basic info',
    // 學歷
    GET_EDUCTIONS: '[User Resume Management Page] Get eductions list',
    SET_EDUCTIONS: '[User Resume Management Page] Set eductions list',
    CREATE_EDUCTIONS: '[User Resume Management Page] Create eductions list',
    ADD_EDUCTIONS: '[User Resume Management Page] Add eductions list',
    UPDATE_EDUCTION: '[User Resume Management Page] Update eduction',
    UPDATE_EDUCTION_STORE: '[User Resume Management Page] Update eduction store',
    DELETE_EDUCTION: '[User Resume Management Page] Delete eduction',
    DELETE_EDUCTION_STORE: '[User Resume Management Page] Delete eduction store',
    // 經歷
    GET_EXPERIENCES: '[User Resume Management Page] Get experiences list',
    SET_EXPERIENCES: '[User Resume Management Page] Set experiences list',
    CREATE_EXPERIENCES: '[User Resume Management Page] Create experiences list',
    UPDATE_EXPERIENCE: '[User Resume Management Page] Update experience',
    UPDATE_EXPERIENCE_STORE: '[User Resume Management Page] Update experience store',
    DELETE_EXPERIENCE: '[User Resume Management Page] Delete experience',
    DELETE_EXPERIENCE_STORE: '[User Resume Management Page] Delete experience store',
    ADD_EXPERIENCES: '[User Resume Management Page] Add experiences list',
    // 專業證照
    GET_LICENSES: '[User Resume Management Page] Get Licenses list',
    SET_LICENSES: '[User Resume Management Page] Set Licenses list',
    CREATE_LICENSES: '[User Resume Management Page] Create Licenses list',
    UPDATE_LICENSE: '[User Resume Management Page] Update License',
    UPDATE_LICENSE_STORE: '[User Resume Management Page] Update License store',
    DELETE_LICENSE: '[User Resume Management Page] Delete License',
    DELETE_LICENSE_STORE: '[User Resume Management Page] Delete License store',
    ADD_LICENSE: '[User Resume Management Page] Add License',
    // 自傳
    GET_AUTOBIOGRAPHIES: '[User Resume Management Page] Get Autobiographies list',
    SET_AUTOBIOGRAPHIES: '[User Resume Management Page] Set Autobiographies list',
    CREATE_AUTOBIOGRAPHIES: '[User Resume Management Page] Create Autobiographies list',
    UPDATE_AUTOBIOGRAPHY: '[User Resume Management Page] Update Autobiography',
    UPDATE_AUTOBIOGRAPHY_STORE: '[User Resume Management Page] Update Autobiography store',
    ADD_AUTOBIOGRAPHIES: '[User Resume Management Page] Add Autobiographies list',
    DELETE_AUTOBIOGRAPHY: '[User Resume Management Page] Delete Autobiography',
    DELETE_AUTOBIOGRAPHY_STORE: '[User Resume Management Page] Delete Autobiography store',
    // 附件
    GET_APPENDICES: '[User Resume Management Page] Get Appendices list',
    SET_APPENDICES: '[User Resume Management Page] Set Appendices list',
    CREATE_APPENDICES: '[User Resume Management Page] Create Appendices list',
    DELETE_APPENDICE: '[User Resume Management Page] Delete Appendice',
    DELETE_APPENDICE_STORE: '[User Resume Management Page] Delete Appendice store',
    ADD_APPENDICES: '[User Resume Management Page] Add Appendices list',
    // 學歷代碼
    GET_EDUCTIONCODE: '[User Resume Management Page] Get eduction Code list',
    SET_EDUCTIONCODE: '[User Resume Management Page] Set eduction Code list',
    // 畢業代碼
    GET_GRADUATECODE: '[User Resume Management Page] Get graduate Code list',
    SET_GRADUATECODE: '[User Resume Management Page] Set graduate Code list',
    // 上傳大頭貼
    UPLOAD_PROFILE_PICTURE: '[User Resume Management Page] Upload profile picture',
    GET_PROFILE_PICTURE: '[User Resume Management Page] Get profile picture',
    SET_PROFILE_PICTURE: '[User Resume Management Page] Set profile picture',
    // 邀請碼
    SET_INVITATION_CODE: '[User Resume Management Page] Set invitation code',
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
);

export const resetErr = createAction(
    actionType.RESET_ERR
);

export const setReusmeTitle = createAction(
    actionType.SET_RESUME_TITLE,
    props<{ payload: string }>()
);

export const setResumeCode = createAction(
    actionType.SET_RESUME_CODE,
    props<{ payload: string }>()
);

export const setResumeBasicInfo = createAction(
    actionType.SET_RESUME_BASIC_INFO,
    props<{ payload: ResumeBaseBasicsBaseBasicDto }>()
);

export const getResumeEductions = createAction(
    actionType.GET_EDUCTIONS,
);

export const setResumeEductions = createAction(
    actionType.SET_EDUCTIONS,
    props<{ payload: ResumeEducationsEducationDto[] }>()
);

export const getResumeExperiences = createAction(
    actionType.GET_EXPERIENCES,
);

export const setResumeExperiences = createAction(
    actionType.SET_EXPERIENCES,
    props<{ payload: ResumeExperiencesExperienceDto[] }>()
);

export const getResumeLicenses = createAction(
    actionType.GET_LICENSES,
);

export const setResumeLicenses = createAction(
    actionType.SET_LICENSES,
    props<{ payload: ResumeLicensesLicenseDto[] }>()
);

export const getResumeAutobiographies = createAction(
    actionType.GET_AUTOBIOGRAPHIES,
);

export const setResumeAutobiographies = createAction(
    actionType.SET_AUTOBIOGRAPHIES,
    props<{ payload: ResumeAutobiographiesAutobiographyDto[] }>()
);

export const getResumeAppendices = createAction(
    actionType.GET_APPENDICES,
);

export const setResumeAppendices = createAction(
    actionType.SET_APPENDICES,
    props<{ payload: ResumeAppendicesAppendixDto[] }>()
);

export const getEductionCodeList = createAction(
    actionType.GET_EDUCTIONCODE,
);

export const setEductionCodeList = createAction(
    actionType.SET_EDUCTIONCODE,
    props<{ payload: ResumeShareCodesShareCodeDto[] }>()
);

export const getGraduateCodeList = createAction(
    actionType.GET_GRADUATECODE,
);

export const setGraduateCodeList = createAction(
    actionType.SET_GRADUATECODE,
    props<{ payload: ResumeShareCodesShareCodeDto[] }>()
);

export const getBasicInfo = createAction(
    actionType.GET_RESUME_BASIC_INFO,
);

export const updateBasicInfo = createAction(
    actionType.UPDATE_RESUME_BASIC_INFO,
    props<{ payload: {id: string; data: ResumeBaseBasicsBaseBasicUpdateDto}}>()
);

export const createEduction = createAction(
    actionType.CREATE_EDUCTIONS,
    props<{ payload: ResumeEducationsEducationCreateDto }>(),
);

export const updateEduction = createAction(
    actionType.UPDATE_EDUCTION,
    props<{ payload: {id: string, data: ResumeEducationsEducationUpdateDto} }>(),
);

export const updateEductionStore = createAction(
    actionType.UPDATE_EDUCTION_STORE,
    props<{ payload: ResumeEducationsEducationDto }>(),
);

export const delEduction = createAction(
    actionType.DELETE_EDUCTION,
    props<{ payload: string }>(),
);

export const delEductionStore = createAction(
    actionType.DELETE_EDUCTION_STORE,
    props<{ payload: string }>(),
);

export const addEduction = createAction(
    actionType.ADD_EDUCTIONS,
    props<{ payload: ResumeEducationsEducationDto }>(),
);



export const createExperience = createAction(
    actionType.CREATE_EXPERIENCES,
    props<{ payload: ResumeExperiencesExperienceCreateDto }>(),
);

export const addExperience = createAction(
    actionType.ADD_EXPERIENCES,
    props<{ payload: ResumeExperiencesExperienceDto }>(),
);

export const updateExperience = createAction(
    actionType.UPDATE_EXPERIENCE,
    props<{ payload: {id: string, data: ResumeExperiencesExperienceUpdateDto} }>(),
);

export const updateExperienceStore = createAction(
    actionType.UPDATE_EXPERIENCE_STORE,
    props<{ payload: ResumeExperiencesExperienceDto }>(),
);

export const delExperience = createAction(
    actionType.DELETE_EXPERIENCE,
    props<{ payload: string }>(),
);

export const delExperienceStore = createAction(
    actionType.DELETE_EXPERIENCE_STORE,
    props<{ payload: string }>(),
);

export const createLicense = createAction(
    actionType.CREATE_LICENSES,
    props<{ payload: ResumeLicensesLicenseCreateDto }>()
);

export const addLicense = createAction(
    actionType.ADD_LICENSE,
    props<{ payload: ResumeLicensesLicenseDto }>()
);

export const updateLicense = createAction(
    actionType.UPDATE_LICENSE,
    props<{ payload: { id: string, data: ResumeLicensesLicenseUpdateDto } }>()
);

export const updateLicenseStore = createAction(
    actionType.UPDATE_LICENSE_STORE,
    props<{ payload: ResumeLicensesLicenseDto }>()
);

export const delLicense = createAction(
    actionType.DELETE_LICENSE,
    props<{ payload: string }>()
);

export const delLicenseStore = createAction(
    actionType.DELETE_LICENSE_STORE,
    props<{ payload: string }>()
);

export const createAutobiographies = createAction(
    actionType.CREATE_AUTOBIOGRAPHIES,
    props<{ payload: ResumeAutobiographiesAutobiographyCreateDto }>(),
);

export const addAutobiographies = createAction(
    actionType.ADD_AUTOBIOGRAPHIES,
    props<{ payload: ResumeAutobiographiesAutobiographyDto }>(),
);

export const updateAutobiography = createAction(
    actionType.UPDATE_AUTOBIOGRAPHY,
    props<{ payload: { id: string, data: ResumeAutobiographiesAutobiographyCreateDto} }>(),
);

export const updateAutobiographyStore = createAction(
    actionType.UPDATE_AUTOBIOGRAPHY_STORE,
    props<{ payload: ResumeAutobiographiesAutobiographyDto }>(),
);

export const delAutobiography = createAction(
    actionType.DELETE_AUTOBIOGRAPHY,
    props<{ payload: string }>(),
);

export const delAutobiographyStore = createAction(
    actionType.DELETE_AUTOBIOGRAPHY_STORE,
    props<{ payload: string }>(),
);

export const createAppendices = createAction(
    actionType.CREATE_APPENDICES,
    props<{ payload: { createFileInputWithStream?: File, query: { ResumeCode: string; AppendixName: string; AppendixContent: string } } }>(),
);

export const addAppendices = createAction(
    actionType.ADD_APPENDICES,
    props<{ payload: ResumeAppendicesAppendixDto }>(),
);

export const delAppendice = createAction(
    actionType.DELETE_APPENDICE,
    props<{ payload: string }>(),
);

export const delAppendiceStore = createAction(
    actionType.DELETE_APPENDICE_STORE,
    props<{ payload: string }>(),
);

export const uploadProfilePicture = createAction(
    actionType.UPLOAD_PROFILE_PICTURE,
    props<{ payload: { ImageContent: File, Type: VoloAbpAccountProfilePictureType } }>(),
);

export const getProfilePicture = createAction(
    actionType.GET_PROFILE_PICTURE,
);

export const setProfilePicture = createAction(
    actionType.SET_PROFILE_PICTURE,
    props<{ payload: VoloAbpAccountProfilePictureSourceDto }>(),
);

export const setInvitationCode = createAction(
    actionType.SET_INVITATION_CODE,
    props<{ payload: string }>(),
);