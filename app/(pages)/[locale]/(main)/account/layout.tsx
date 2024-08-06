import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { AccountLayout } from '@/app/_entities/account-layout'
import { NO_INDEX_PAGE } from '@/app/_shared/const/settings'

export const metadata: Metadata = {
    ...NO_INDEX_PAGE
}

export default function DashboardLayout({
    children
}: Readonly<{
    children: ReactNode
}>) {
    return <AccountLayout>{children}</AccountLayout>
}
