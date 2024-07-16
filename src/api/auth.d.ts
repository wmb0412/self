export interface ISignIn {
    username: string;
    password: string;
}

export interface ISignInRes {
    access_token: string;
    token_type: string;
}