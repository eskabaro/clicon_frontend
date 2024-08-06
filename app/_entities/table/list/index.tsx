'use client'

import type { FC, PropsWithChildren } from 'react'
import { TableThead } from './table-thead'
import { TableTbody } from './table-tbody'

interface ITableListProps extends PropsWithChildren<unknown> {}

const TableListComponent: FC<ITableListProps> = ({ children }) => {
    return children
}

export const TableList = Object.assign(TableListComponent, {
    THead: TableThead,
    TBody: TableTbody
})
