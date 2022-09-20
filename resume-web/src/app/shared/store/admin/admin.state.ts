import { ResumeUserDatasUserDto } from "@app/core/models/Api";
import { loginResponseDto } from "@app/core/models/login.model";

export interface AdminState {
    // 忘記密碼用，信箱
    tempAccount: string;
    // 是否已登入
    isLoggedIn: boolean;
    // 身分驗證用 token obj
    token: loginResponseDto | null;
    // 會員資訊
    currentUser: ResumeUserDatasUserDto | null;
    // 錯誤訊息
    errorMessage: any;
}