'use client'

import { useState, type FC } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { locales } from '@/app/_shared/const/locales'
import { Popover } from '@/app/_entities/popover'
import { Icon } from '@/app/_shared/ui/icon'
import { capitalizeFirstLetter } from '@/app/_shared/lib/utils'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './LocaleSwitcher.module.scss'

export const LocaleSwitcher: FC = (props) => {
    const t = useTranslations('Locales')
    const locale = useLocale()
    const pathname = usePathname()
    const { replace } = useRouter()
    const [currentLocale, setCurrentLocale] = useState<string>(locale)

    const redirectedPathname = (locale: string) => {
        if (!pathname) return '/'

        const segments = pathname.split('/')
        segments[1] = locale

        return segments.join('/')
    }

    return (
        <Popover {...props}>
            <Popover.Button className={styles.button}>
                {capitalizeFirstLetter(currentLocale)}
                <Icon name='arrow-down' />
            </Popover.Button>
            <Popover.List>
                {Object.values(locales).map((locale) => {
                    const isActive = currentLocale === locale

                    return (
                        <Popover.ListItem
                            key={locale}
                            value={locale}
                            onClick={() => replace(redirectedPathname(locale))}
                            setValue={setCurrentLocale}
                            className={cn(styles.item, isActive && styles.active)}
                        >
                            <div className={styles['item-box']}>
                                <Icon name={locale} />
                                {t(locale)}
                            </div>
                            {isActive && <Icon name='check' />}
                        </Popover.ListItem>
                    )
                })}
            </Popover.List>
        </Popover>
    )
}
