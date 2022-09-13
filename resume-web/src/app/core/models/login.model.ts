export interface loginRequestDto {
    Client_id: string;
    Client_secret: string;
    username: string;
    password: string;
    scope: string;
    grant_type: string;
}

export interface loginResponseDto {
    access_token: string;
    expires_in: number;
    scope: string;
    token_type: string;
}