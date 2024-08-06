export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface ILoginBody {
    email: string
    password: string
}

export interface IRegisterBody extends ILoginBody {
    firstName: string
    lastName: string
}
