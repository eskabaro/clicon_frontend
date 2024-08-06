'use client'

import { type ComponentPropsWithoutRef, type FC } from 'react'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './TableFooter.module.scss'

interface ITableFooterProps extends ComponentPropsWithoutRef<'tfoot'> {
    colSpan?: number
    contentClassName?: string
}

export const TableFooter: FC<ITableFooterProps> = ({ colSpan, contentClassName, className, children, ...rest }) => {
    return (
        <tfoot className={cn(styles.footer, className)} {...rest}>
            <tr>
                <td colSpan={colSpan}>
                    <div className={cn(styles['content-box'], contentClassName)}>{children}</div>
                </td>
            </tr>
        </tfoot>
    )
}
