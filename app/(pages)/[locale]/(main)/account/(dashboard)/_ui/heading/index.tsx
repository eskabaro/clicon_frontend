'use client'

import { type ReactNode, useContext, type FC } from 'react'
import { useTranslations } from 'next-intl'
import { redirect } from 'next/navigation'
import { AuthContext } from '@/app/_shared/lib/providers/auth'
import { ROUTE } from '@/app/_shared/lib/enums'
import { Text } from '@/app/_shared/ui/text'
import styles from './DashboardHeading.module.scss'

export const DashboardHeading: FC = () => {
    const t = useTranslations('Dashboard.dashboard')
    const { user } = useContext(AuthContext)

    if (!user) return redirect(ROUTE.LOGIN)

    const link = (chunks: ReactNode, href: string) => (
        <Text as='a' color='secondary-500' href={href}>
            {chunks}
        </Text>
    )

    return (
        <div className={styles.heading}>
            <Text as='h1' color='gray-900' size='20' weight='600'>
                {t('hello', { name: user.firstName })}
            </Text>
            <Text color='gray-700' size='14' lineHeight='140'>
                {t.rich('text', {
                    orders: (chunks) => link(chunks, ROUTE.ORDER_HISTORY),
                    shipping: (chunks) => link(chunks, ROUTE.ORDER_HISTORY),
                    sittings: (chunks) => link(chunks, ROUTE.SETTINGS)
                })}
            </Text>
        </div>
    )
}
