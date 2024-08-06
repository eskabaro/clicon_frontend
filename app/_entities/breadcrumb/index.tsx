'use client'

import type { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { removeLocaleFromPathname, toTitleCase } from '@/app/_shared/lib/utils'
import { Icon } from '@/app/_shared/ui/icon'
import styles from './Breadcrumb.module.scss'

export const Breadcrumb: FC = () => {
    const pathnames = removeLocaleFromPathname(usePathname())

    return (
        !!pathnames.length && (
            <section className={styles.wrapper}>
                <ol className={styles.wrapper_list}>
                    <li className={styles.item}>
                        <Icon name='home' />
                        <Link href='/'>Home</Link>
                    </li>
                    {Array.isArray(pathnames) &&
                        pathnames.map((link) => (
                            <li key={link} className={styles.item}>
                                <Icon name='mini-arrow-right' />
                                <Link href={`/${link}`}>{toTitleCase(link)}</Link>
                            </li>
                        ))}
                </ol>
            </section>
        )
    )
}
