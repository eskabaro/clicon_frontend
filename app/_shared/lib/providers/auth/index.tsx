'use client'

import { createContext, type Dispatch, type FC, PropsWithChildren, type SetStateAction, useMemo, useState } from 'react'
import type { IUser } from '../../types/user'

type UserType = IUser | null

interface IContext {
    user: UserType
    setUser: Dispatch<SetStateAction<UserType>>
}

interface IContextProviderProps extends PropsWithChildren<unknown> {
    user: UserType
}

export const AuthContext = createContext<IContext>({
    user: null,
    setUser: () => {}
})

export const AuthContextProvider: FC<IContextProviderProps> = ({ children, user: userOnServerSide }) => {
    const [user, setUser] = useState<UserType>(userOnServerSide)

    const contextValue: IContext = useMemo(
        () => ({
            user,
            setUser
        }),
        [user]
    )

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
