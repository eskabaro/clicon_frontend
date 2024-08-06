import { ReactNode } from 'react'
import { AuthLayout as Layout } from '@/app/_entities/auth-layout'

export default function AuthLayout({
    children
}: Readonly<{
    children: ReactNode
}>) {
    return <Layout>{children}</Layout>
}
