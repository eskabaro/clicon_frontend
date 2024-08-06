'use client'

import type { FC } from 'react'
import type { IPrice } from '@/app/_shared/lib/types/product'
import { Text } from '@/app/_shared/ui/text'
import { useSetSearchParams } from '@/app/_shared/lib/hooks/useSetSearchParams'

interface IPriceRangeProps extends IPrice {}

export const PriceRange: FC<IPriceRangeProps> = ({ min, max }) => {
    const { setSearchParam: setMin } = useSetSearchParams('min')
    const { setSearchParam: setMax } = useSetSearchParams('max')

    const minMaxProps = { min, max, step: 1, type: 'number' }

    return (
        <div>
            <Text as='h1' color='gray-900' weight='500' transform='uppercase'>
                Price Range
            </Text>

            <div>
                <span>min:</span>
                <input {...minMaxProps} onChange={(e) => setMin(e.target.value)} />
            </div>
            <div>
                <span>max:</span>
                <input {...minMaxProps} onChange={(e) => setMax(e.target.value)} />
            </div>
        </div>
    )
}
