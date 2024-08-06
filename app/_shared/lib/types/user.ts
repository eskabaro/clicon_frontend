import { ITokens } from './auth'

export interface IUser extends ITokens {
    id: string
    createdAt: string
    updateAdt: string
    firstName: string
    lastName: string
    email: string
    password: string
}
