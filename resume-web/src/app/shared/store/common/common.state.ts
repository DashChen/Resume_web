import { area, areasList } from "@app/core/interfaces/ares.model";
import { skill, skillsList } from "@app/core/interfaces/skill.model";
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
    // 性別
    sexList: ResumeShareCodesShareCodeDto[] | null;
    // 證照列表
    skillsList: skillsList[];
    // 各大類證照
    mainSkills: skill[];
    // 地區列表
    areasList: areasList[];
    // 各大區
    mainAreas: area[];
    // 錯誤
    errorMessage: any;
}