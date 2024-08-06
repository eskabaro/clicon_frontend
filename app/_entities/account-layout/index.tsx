'use client'

import type { FC, PropsWithChildren } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useModal } from '@/app/_shared/lib/hooks/useModal'
import { removeLocaleFromPathname } from '@/app/_shared/lib/utils'
import { LogOutModal } from '@/app/_features/log-out-modal'
import { Icon } from '@/app/_shared/ui/icon'
import { Text } from '@/app/_shared/ui/text'
import { menuTabs } from './const'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './AccountLayout.module.scss'

interface IAccountLayoutProps extends PropsWithChildren<unknown> {}

export const AccountLayout: FC<IAccountLayoutProps> = ({ children }) => {
    const t = useTranslations('Dashboard.aside')
    const pathname = removeLocaleFromPathname(usePathname(), true)
    const logOutModal = useModal()

    return (
        <div className={styles.wrapper}>
            <aside className={styles.wrapper_aside}>
                <ul className={styles.list}>
                    {menuTabs.map(({ icon, href, key }) => {
                        const isActive = pathname === href

                        return (
                            <li key={key} className={cn(styles.list_item, isActive && styles.active)}>
                                <Link href={href}>
                                    <Icon name={icon} color='gray-600' />
                                    <Text as='span' size='14' color='gray-600'>
                                        {t(key)}
                                    </Text>
                                </Link>
                            </li>
                        )
                    })}
                    <li className={styles.list_item} onClick={logOutModal.onOpen}>
                        <div>
                            <Icon name='log-out' />
                            <Text as='span' size='14' color='gray-600'>
                                {t('log-out')}
                            </Text>
                        </div>
                        <LogOutModal {...logOutModal} />
                    </li>
                </ul>
            </aside>
            {children}
        </div>
    )
}
