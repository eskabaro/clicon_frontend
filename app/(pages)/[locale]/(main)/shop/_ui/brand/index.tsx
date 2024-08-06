'use client'

import type { FC } from 'react'
import { useSetSearchParams } from '@/app/_shared/lib/hooks/useSetSearchParams'
import { transformParams } from '@/app/_shared/lib/utils'
import { ToggleInput } from '@/app/_shared/ui/toggle-input'
import { Text } from '@/app/_shared/ui/text'
import styles from './Brand.module.scss'

interface IBrandProps {
    data: string[]
}

export const Brand: FC<IBrandProps> = ({ data }) => {
    const { selectedParam, setSearchParam } = useSetSearchParams('brand')

    return (
        <div className={styles.wrapper}>
            <Text as='h1' color='gray-900' weight='500' transform='uppercase'>
                popular Brands
            </Text>
            <ul className={styles.wrapper_list}>
                {data.map((item) => (
                    <li key={item}>
                        <ToggleInput
                            id={item}
                            type='checkbox'
                            name='category'
                            value={item}
                            checked={selectedParam.includes(item)}
                            onChange={(e) => setSearchParam(e.target.value)}
                        >
                            <Text color='gray-700' size='14' as='span'>
                                {transformParams(item)}
                            </Text>
                        </ToggleInput>
                    </li>
                ))}
            </ul>
        </div>
    )
}
