'use client'

import type { FC } from 'react'
import type { IAllProduct } from '@/app/_shared/lib/types/product'
import styles from './ProductDetails.module.scss'
import { Slider } from './slider'

interface IProductDetailsProps extends IAllProduct {}

export const ProductDetails: FC<IProductDetailsProps> = ({ images, name }) => {
    return (
        <div className={styles.wrapper}>
            <Slider images={images} name={name} />
            <div>2</div>
        </div>
    )
}
