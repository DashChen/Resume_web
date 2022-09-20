import { ResumeMailTplsMailTplDto, ResumeShareCodesShareCodeDto, ResumeSMSTplsSMSTplDto } from "@app/core/models/Api";

export interface CommonState {
    // 讀取中?
    isLoading: boolean;
    // 階段列表
    stageList: ResumeShareCodesShareCodeDto[];
    // 寫入階段列表
    writeStatusList: ResumeShareCodesShareCodeDto[];
    // 簡訊樣板
    smsTpls: ResumeSMSTplsSMSTplDto[] | null;
    // 信件樣板
    mailTpls: ResumeMailTplsMailTplDto[] | null;
    // 錯誤
    errorMessage: any;
}