'use client'

import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Logo } from '@/app/_shared/ui/logo'
import { HorizontalLine } from '@/app/_shared/ui/horizontal-line'
import { socialLinks } from './const'
import { LocaleSwitcher } from '@/app/_features/locale-switcher'
import { AccountPopover } from '@/app/_features/account-popover'
import { WishlistPopover } from '@/app/_features/wishlist-popover'
import { CartPopover } from '@/app/_features/cart-popover'
import { Input } from '@/app/_shared/ui/input'
import { Text } from '@/app/_shared/ui/text'
import { Icon } from '@/app/_shared/ui/icon'
import styles from './Header.module.scss'

export const Header: FC = () => {
    const t = useTranslations('Header')

    return (
        <header className={styles.wrapper}>
            <section className={styles['wrapper_sub-header']}>
                <Text size='14' weight='400'>
                    {t('welcome-text')}
                </Text>
                <nav className={styles.navigation}>
                    <ul className={styles.navigation_list}>
                        <li>
                            <Text as='span' size='14' weight='400'>
                                {t('follow')}
                            </Text>
                        </li>
                        {socialLinks.map(({ href, icon }) => (
                            <li key={icon}>
                                <Link href={href}>
                                    <Icon name={icon} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.navigation_line} />
                    <div className={styles.navigation_list}>
                        <LocaleSwitcher />
                        <LocaleSwitcher />
                    </div>
                </nav>
            </section>
            <HorizontalLine opacity='15' />
            <section className={styles.wrapper_header}>
                <Logo />
                <Input className={styles['search-input']} placeholder={t('search-placeholder')} icon='search' />
                <nav>
                    <CartPopover />
                    <WishlistPopover />
                    <AccountPopover />
                </nav>
            </section>
        </header>
    )
}
