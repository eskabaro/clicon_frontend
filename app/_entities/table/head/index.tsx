'use client'

import type { ComponentPropsWithoutRef, FC } from 'react'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './TableHead.module.scss'

interface ITableHeadingProps extends ComponentPropsWithoutRef<'caption'> {}

export const TableHead: FC<ITableHeadingProps> = ({ children, className, ...rest }) => {
    return (
        <caption className={cn(styles.head, className)} {...rest}>
            {children}
        </caption>
    )
}
