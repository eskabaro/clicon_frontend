'use client'

import type { FC } from 'react'
import { useSetSearchParams } from '@/app/_shared/lib/hooks/useSetSearchParams'
import { transformParams } from '@/app/_shared/lib/utils'
import { ToggleInput } from '@/app/_shared/ui/toggle-input'
import { Text } from '@/app/_shared/ui/text'
import styles from './Category.module.scss'

interface ICategoryProps {
    data: string[]
}

export const Category: FC<ICategoryProps> = ({ data }) => {
    const { selectedParam, setSearchParam } = useSetSearchParams('category')

    return (
        <div className={styles.wrapper}>
            <Text as='h1' color='gray-900' weight='500' transform='uppercase'>
                Category
            </Text>
            <ul className={styles.wrapper_list}>
                {data.map((item) => {
                    const isActive = selectedParam === item

                    return (
                        <li key={item}>
                            <ToggleInput
                                id={item}
                                name='category'
                                type='radio'
                                value={item}
                                checked={isActive}
                                onChange={(e) => setSearchParam(e.target.value)}
                            >
                                <Text color={isActive ? 'gray-900' : 'gray-700'} lineHeight='140' size='14' as='span'>
                                    {transformParams(item)}
                                </Text>
                            </ToggleInput>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
