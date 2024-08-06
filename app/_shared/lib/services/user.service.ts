import { instance } from '../../config/axios'
import { API_URL } from '../enums'
import type { IUser } from '../types/user'

class UserService {
    async getUserOnServerSide(token: string): Promise<IUser | null> {
        const data = await instance.get<IUser>(API_URL.USER, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data ? data.data : null
    }
}

export default new UserService()
