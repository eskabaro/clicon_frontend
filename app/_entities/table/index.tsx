'use client'

import type { ComponentPropsWithoutRef, FC } from 'react'
import { TableHead } from './head'
import { TableList } from './list'
import { TableFooter } from './footer'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './Table.module.scss'

interface ITableProps extends ComponentPropsWithoutRef<'div'> {}

const TableComponent: FC<ITableProps> = ({ children, className, ...rest }) => {
    return (
        <section {...rest} className={cn(styles.wrapper, className)}>
            <table className={styles.wrapper_table}>{children}</table>
        </section>
    )
}

export const Table = Object.assign(TableComponent, {
    Head: TableHead,
    List: TableList,
    Foot: TableFooter
    // Pagination: TablePagination
})
