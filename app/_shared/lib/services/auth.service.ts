import axios from 'axios'
import tokensService from './tokens.service'
import { getContentType } from '../utils'
import { API_URL } from '../enums'
import { ILoginBody, IRegisterBody } from '../types/auth'
import { instance } from '../../config/axios'
import { IUser } from '../types/user'

class AuthService {
    register(body: IRegisterBody) {
        return this.authenticate(API_URL.REGISTER, body)
    }

    async login(body: ILoginBody) {
        return this.authenticate(API_URL.LOGIN, body)
    }

    async getNewTokens() {
        const refreshToken = tokensService.get('refresh-token')

        const { data } = await axios.post(
            `${process.env.BASE_API_URL}${API_URL.GET_NEW_TOKENS}`,
            { refreshToken },
            {
                headers: getContentType()
            }
        )

        if (data) {
            console.log('from refresh: ', data)

            // save to storage
        }

        return data
    }

    private async authenticate(url: string, body: IRegisterBody | ILoginBody): Promise<IUser> {
        const { data } = await instance.post<IUser>(url, body)

        if (data) {
            const { accessToken, refreshToken } = data
            tokensService.set({ accessToken, refreshToken })
        }

        return data
    }
}

export default new AuthService()
