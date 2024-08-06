'use client'

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { cn } from '@/app/_shared/lib/classnames'
import { Text } from '@/app/_shared/ui/text'
import styles from './TableTbody.module.scss'

type ItemType = {
    id: string
    labels: string[] | ReactNode[]
}

interface ITableTbodyProps extends ComponentPropsWithoutRef<'tbody'> {
    items: ItemType[]
}

export const TableTbody: FC<ITableTbodyProps> = ({ className, items, ...rest }) => {
    return (
        <tbody className={cn(styles.wrapper, className)} {...rest}>
            {items.length ? (
                items.map(({ id, labels }) => (
                    <tr key={id}>
                        {labels.map((e, i) => (
                            <td key={i}>{e}</td>
                        ))}
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={4} className={styles.center}>
                        <Text as='span' size='14' color='gray-700'>
                            Cart is empty
                        </Text>
                    </td>
                </tr>
            )}
        </tbody>
    )
}
