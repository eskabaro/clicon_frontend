'use client'

import type { FC, ReactNode } from 'react'
import type { ColorsType } from '../../const/colors'
import { cn } from '../../lib/classnames'
import styles from './HorizontalLine.module.scss'

interface IHorizontalLineProps {
    color?: ColorsType
    opacity?: '10' | '15' | '20' | '25'
    children?: ReactNode
}

export const HorizontalLine: FC<IHorizontalLineProps> = ({ color, opacity, children }) => {
    const line = (
        <hr className={cn(styles.line, `background_${color || 'gray-00'}`, opacity && styles[`opacity_${opacity}`])} />
    )

    return children ? (
        <div className={styles['line-box']}>
            {line}
            {children}
            {line}
        </div>
    ) : (
        line
    )
}
