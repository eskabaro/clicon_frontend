'use client'

import type { FC, PropsWithChildren } from 'react'
import styles from './Footer.module.scss'

interface IModalFooterProps extends PropsWithChildren<unknown> {}

export const ModalFooter: FC<IModalFooterProps> = ({ children }) => {
    return <div className={styles.footer}>{children}</div>
}
