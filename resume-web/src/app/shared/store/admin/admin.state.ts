
export interface AdminState {
    // 忘記密碼用，信箱
    tempAccount: string;
    // 是否已登入
    isLoggedIn: boolean;
    // 身分驗證用 token
    token: string;
}