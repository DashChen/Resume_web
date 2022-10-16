import { ResumeAppendicesAppendixDto, ResumeAutobiographiesAutobiographyDto, ResumeBaseBasicsBaseBasicDto, ResumeEducationsEducationDto, ResumeExperiencesExperienceDto, ResumeLicensesLicenseDto, ResumeShareCodesShareCodeDto, ResumeUserDatasUserDto, VoloAbpAccountProfilePictureSourceDto } from "@app/core/models/Api";
import { loginResponseDto } from "@app/core/models/login.model";

export interface UserState {
    // 註冊時輸入的手機號
    registerPhone: string;
    // 忘記密碼用，信箱或手機號
    tempAccount: string;
    // 是否已登入
    isLoggedIn: boolean;
    // 身分驗證用 token obj
    token: loginResponseDto | null;
    // 會員資訊
    currentUser: ResumeUserDatasUserDto | null;
    // 錯誤訊息
    errorMessage: any;
    // preview resume title
    resumeTitle: string;
    // 履歷基本資料，取得 resume code 會暫存至這
    resumeBasicInfo: ResumeBaseBasicsBaseBasicDto;
    // 學歷
    resumeEductions: ResumeEducationsEducationDto[];
    // 經歷
    resumeExperiences: ResumeExperiencesExperienceDto[];
    // 專業證照
    resumeLicenses: ResumeLicensesLicenseDto[];
    // 自傳
    resumeAutobiographies: ResumeAutobiographiesAutobiographyDto[];
    // 附件
    resumeAppendices: ResumeAppendicesAppendixDto[];
    // 學歷代碼
    eductionCodeList: ResumeShareCodesShareCodeDto[];
    // 畢業代碼
    graduateCodeList: ResumeShareCodesShareCodeDto[];
    // 大頭貼
    profilePicture: VoloAbpAccountProfilePictureSourceDto;
    // 邀請碼
    invitationCode: string;
}