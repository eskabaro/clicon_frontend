import Cookies from 'js-cookie'
import { TOKEN } from '../enums'
import { ITokens } from '../types/auth'

class TokensService {
    get(type: 'access-token' | 'refresh-token') {
        const tokenKey = type === 'access-token' ? TOKEN.ACCESS : TOKEN.REFRESH

        return Cookies.get(tokenKey) || null
    }

    set({ accessToken, refreshToken }: ITokens) {
        Cookies.set(TOKEN.ACCESS, accessToken)
        Cookies.set(TOKEN.REFRESH, refreshToken)
    }

    remove() {
        Cookies.remove(TOKEN.ACCESS)
        Cookies.remove(TOKEN.REFRESH)
    }
}

export default new TokensService()
