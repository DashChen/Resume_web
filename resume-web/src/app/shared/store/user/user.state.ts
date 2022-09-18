import { ResumeUserDatasUserDto } from "@app/core/models/Api";
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
}