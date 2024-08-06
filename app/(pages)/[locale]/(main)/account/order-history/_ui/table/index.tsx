'use client'

import type { FC } from 'react'
import { Table } from '@/app/_entities/table'
import { TableList } from '@/app/_entities/table/list'
import { Text } from '@/app/_shared/ui/text'
import { Button } from '@/app/_shared/ui/button'
import styles from './Table.module.scss'

const headings = ['Order ID', 'Status', 'Date', 'Total', 'Action']

export const OrderHistoryTable: FC = () => {
    return (
        <Table>
            <Table.Head>
                <Text as='h1' color='gray-900' size='14' transform='uppercase'>
                    Order HIstory
                </Text>
            </Table.Head>
            <TableList.THead
                items={headings.map((item) => (
                    <Text as='h2' transform='uppercase' size='12' color='gray-700'>
                        {item}
                    </Text>
                ))}
            />
            <TableList.TBody
                items={[
                    { id: '1', labels: ['1', '2', '3', '4', '4'] },
                    { id: '2', labels: ['1', '2', '3', '4', '4'] }
                ]}
            />
            <Table.Foot colSpan={5} contentClassName={styles['footer-box']}>
                <Button variant='blue' size='small'>
                    Update cart
                </Button>
                <Button variant='blue-v-1' size='small'>
                    Update cart
                </Button>
                <Button variant='blue-v-2' size='small'>
                    Update cart
                </Button>
            </Table.Foot>
        </Table>
    )
}
