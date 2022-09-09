import { VoloAbpIdentityIdentityUserDto } from "@app/core/models/Api";

export interface UserState {
    // 註冊時輸入的手機號
    registerPhone: string;
    // 忘記密碼用，信箱或手機號
    tempAccount: string;
    // 是否已登入
    isLoggedIn: boolean;
    // 會員資訊
    currentUser: VoloAbpIdentityIdentityUserDto;
}