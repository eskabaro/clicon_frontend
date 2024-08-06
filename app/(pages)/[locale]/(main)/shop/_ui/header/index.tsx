'use client'

import { useEffect, useMemo, useState, type FC } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { transformParams } from '@/app/_shared/lib/utils'
import type { IProductsRes, ISearchParams } from '@/app/_shared/lib/types/product'
import { useSetSearchParams } from '@/app/_shared/lib/hooks/useSetSearchParams'
import { Input } from '@/app/_shared/ui/input'
import { Text } from '@/app/_shared/ui/text'
import { Icon } from '@/app/_shared/ui/icon'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './Header.module.scss'

interface IHeaderProps extends Pick<IProductsRes, 'length'> {
    searchParams: ISearchParams
}

export const Header: FC<IHeaderProps> = ({ length, searchParams }) => {
    const paramsValue = useMemo<string[] | undefined>(() => {
        return Object.values(searchParams).reduce((acc, value) => {
            if (Array.isArray(value)) return acc.concat(value)

            return acc.concat([value])
        }, [])
    }, [searchParams])

    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper_search}>
                <Input inputSize='small' icon='search' placeholder='Search for anything...' full />
                <div className={styles['sort-box']}>
                    <Text as='span' size='14' color='gray-900'>
                        Sort by:
                    </Text>
                </div>
            </div>
            <div className={cn(styles.wrapper_filters, !!paramsValue?.length && styles.active)}>
                {!!paramsValue?.length && (
                    <div className={styles['filters-list']}>
                        <Text as='span' size='14' color='gray-600'>
                            Active Filters:
                        </Text>

                        {paramsValue.map((item, idx) => (
                            <div key={idx} className={styles['filters-list_item']}>
                                <Text as='span' size='14' color='gray-900'>
                                    {transformParams(item)}
                                </Text>
                                <button>
                                    <Icon width={12} height={12} color='gray-400' name='x-mark' />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <Text as='span' color='gray-900' weight='600' size='14'>
                    {length.toLocaleString('en-US')}{' '}
                    <Text as='span' weight='400' color='gray-600'>
                        Results found.
                    </Text>
                </Text>
            </div>
        </section>
    )
}
