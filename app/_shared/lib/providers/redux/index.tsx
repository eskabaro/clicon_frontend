'use client'

import type { FC, PropsWithChildren } from 'react'
import store, { persistor } from '@/app/_shared/store'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
interface IReduxProviderProps extends PropsWithChildren<unknown> {}

export const ReduxProvider: FC<IReduxProviderProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                {children}
            </PersistGate>
        </Provider>
    )
}
