'use client'

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './TableThead.module.scss'

interface ITableTheadProps extends ComponentPropsWithoutRef<'thead'> {
    items: string[] | ReactNode[]
}

export const TableThead: FC<ITableTheadProps> = ({ className, items, ...rest }) => {
    return (
        <thead className={cn(styles.heading, className)} {...rest}>
            <tr>
                {items.map((e, i) => (
                    <td key={i}>{e}</td>
                ))}
            </tr>
        </thead>
    )
}
