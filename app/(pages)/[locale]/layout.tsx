import { NextIntlClientProvider } from 'next-intl'
import { Public_Sans } from 'next/font/google'
import { cookies } from 'next/headers'
import TopLoader from 'nextjs-toploader'
import { getMessages } from 'next-intl/server'
import { QueryProvider } from '@/app/_shared/lib/providers/query'
import { AuthContextProvider } from '@/app/_shared/lib/providers/auth'
import { RootLayout as Layout } from '@/app/_entities/root-layout'
import { SITE_DESCRIPTION, SITE_PROD_URL, SITE_TITLE } from '@/app/_shared/const/settings'
import { TOKEN } from '@/app/_shared/lib/enums'
import userService from '@/app/_shared/lib/services/user.service'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '@/app/(app)/styles/globals.scss'
import { ReduxProvider } from '@/app/_shared/lib/providers/redux'

const publicSans = Public_Sans({
    subsets: ['latin'],
    display: 'swap'
})

export const metadata: Metadata = {
    title: {
        template: `%s | ${SITE_TITLE}`,
        default: SITE_TITLE
    },
    description: SITE_DESCRIPTION,
    openGraph: {
        url: SITE_PROD_URL,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        type: 'website',
        images: [{ url: `${SITE_PROD_URL}/preview.png`, width: 1920, height: 960 }]
    }
}

const getUserData = async () => {
    const accessToken = cookies().get(TOKEN.ACCESS)?.value
    const data = await userService.getUserOnServerSide(accessToken!)

    return data
}

export default async function RootLayout({
    children,
    params: { locale = 'en' }
}: Readonly<{
    children: ReactNode
    params: { locale: string }
}>) {
    const messages = await getMessages()
    const user = await getUserData()

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={publicSans.className}>
                <TopLoader color='#f06848' shadow={false} showSpinner={false} />
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <QueryProvider>
                        <ReduxProvider>
                            <AuthContextProvider user={user}>
                                <Layout>{children}</Layout>
                            </AuthContextProvider>
                        </ReduxProvider>
                    </QueryProvider>
                </NextIntlClientProvider>

                <div id='modal-root' />
            </body>
        </html>
    )
}
