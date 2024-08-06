'use client'

import { type FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface IQueryProviderProps extends PropsWithChildren<unknown> {}

const queryClient = new QueryClient()

export const QueryProvider: FC<IQueryProviderProps> = ({ children }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
