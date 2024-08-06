import axios from 'axios'
import { getContentType } from '../../lib/utils'
import TokensService from '../../lib/services/tokens.service'
import AuthService from '../../lib/services/auth.service'

export const instance = axios.create({
    baseURL: process.env.BASE_API_URL,
    headers: getContentType()
})

instance.interceptors.request.use((config) => {
    const accessToken = TokensService.get('access-token')

    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})

instance.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config

        if (error.response && error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true

            try {
                await AuthService.getNewTokens()
                return instance.request(originalRequest)
            } catch (err: any) {
                TokensService.remove()
            }
        }
    }
)
