'use client'

import type { FC, PropsWithChildren } from 'react'
import { Icon } from '@/app/_shared/ui/icon'
import styles from './Head.module.scss'

interface IModalHeadProps extends PropsWithChildren<unknown> {
    onClose?: () => void
}

export const ModalHead: FC<IModalHeadProps> = ({ onClose, children }) => {
    return (
        <div className={styles.head}>
            {children}
            <button className={styles.head_btn} onClick={onClose}>
                <Icon name='x-mark' color='gray-400' width={20} height={20} />
            </button>
        </div>
    )
}
