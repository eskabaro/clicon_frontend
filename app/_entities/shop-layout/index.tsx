'use client'

import type { FC, PropsWithChildren } from 'react'
import styles from './ShopLayout.module.scss'

interface IShopLayoutProps extends PropsWithChildren<unknown> {}

export const ShopLayout: FC<IShopLayoutProps> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>
}
