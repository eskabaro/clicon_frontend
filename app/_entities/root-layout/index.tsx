'use client'

import { FC, PropsWithChildren } from 'react'
import { Header } from '@/app/_widgets/header'
import { Breadcrumb } from '../breadcrumb'
import { Footer } from '@/app/_widgets/footer'
import styles from './RootLayout.module.scss'

interface IRootLayoutProps extends PropsWithChildren<unknown> {}

export const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Breadcrumb />
            <main className={styles.wrapper_main}>{children}</main>
            <Footer />
        </div>
    )
}
