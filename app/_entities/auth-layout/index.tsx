'use client'

import { type FC, type PropsWithChildren, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './AuthLayout.module.scss'

const tabs = [
    { id: 1, url: '/login' },
    { id: 2, url: '/register' }
]

interface IAuthLayoutProps extends PropsWithChildren<unknown> {}

export const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
    const t = useTranslations('Auth')
    const { push } = useRouter()
    const pathname = usePathname()
    const [activeIdx, setActiveIdx] = useState<number>(() => {
        return tabs.findIndex((tab) => pathname.includes(tab.url))
    })

    useEffect(() => {
        setActiveIdx(tabs.findIndex((tab) => pathname.includes(tab.url)))
    }, [pathname])

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_nav}>
                {tabs.map(({ id, url }, idx) => (
                    <button
                        key={id}
                        className={cn(styles.btn, activeIdx === idx && styles.active)}
                        onClick={() => push(url)}
                    >
                        {t(`nav-btns.${url.replace(/\//g, '')}`)}
                    </button>
                ))}
                <div className={cn(styles.underline)} style={{ left: `calc(var(--auth-btn-width) * ${activeIdx})` }} />
            </div>
            <div className={styles.wrapper_children}>{children}</div>
        </div>
    )
}
