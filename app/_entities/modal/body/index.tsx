'use client'

import type { FC, PropsWithChildren } from 'react'
import styles from './Body.module.scss'

interface IModalBodyProps extends PropsWithChildren<unknown> {}

export const ModalBody: FC<IModalBodyProps> = ({ children }) => {
    return <div className={styles.body}>{children}</div>
}
