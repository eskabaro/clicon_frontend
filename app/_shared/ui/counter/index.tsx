'use client'

import { type Dispatch, type SetStateAction, type FC, useCallback } from 'react'
import { formatNumber } from '../../lib/utils'
import { Text } from '../text'
import { Icon } from '../icon'
import { cn } from '../../lib/classnames'
import styles from './Counter.module.scss'

type VariantType = 'small' | 'large'

interface ICounterProps {
    count: number
    setCount: Dispatch<SetStateAction<number>>
    variant?: VariantType
}

export const Counter: FC<ICounterProps> = ({ count, setCount, variant = 'small' }) => {
    const increment = useCallback(() => {
        setCount((e) => Math.min(e + 1, 100))
    }, [setCount])

    const decrement = useCallback(() => {
        setCount((e) => Math.max(e - 1, 1))
    }, [setCount])

    return (
        <div className={cn(styles.counter, styles[variant])}>
            <button onClick={decrement} disabled={count === 1}>
                <Icon name='minus' />
            </button>
            <Text as='span' align='center' size='16' color='gray-700'>
                {formatNumber(count)}
            </Text>
            <button onClick={increment} disabled={count === 100}>
                <Icon name='plus' />
            </button>
        </div>
    )
}
