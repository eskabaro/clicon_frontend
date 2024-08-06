'use client'

import type { FC } from 'react'
import Image from 'next/image'
import { IProduct } from '@/app/_shared/lib/types/product'
import { useAppDispatch } from '@/app/_shared/store'
import { addToCart } from '@/app/_shared/store/cart'
import { addToWishlist } from '@/app/_shared/store/wishlist'
import { ROUTE } from '@/app/_shared/lib/enums'
import { StarRating } from '@/app/_shared/ui/star-rating'
import { CircleButton } from '@/app/_shared/ui/circle-button'
import { Text } from '@/app/_shared/ui/text'
import styles from './ProductItem.module.scss'

interface IProductItemProps extends IProduct {}

export const ProductItem: FC<IProductItemProps> = ({ images, name, id, price, rating, sale, availability }) => {
    const dispatch = useAppDispatch()

    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper_image}>
                <Image src={images[0]} width={202} height={172} alt={name} priority />
                <div className={styles['product-actions']}>
                    <CircleButton
                        variant='white'
                        icon='wishlist'
                        onClick={() => dispatch(addToWishlist({ id, image: images[0], name, price, sale, availability }))}
                    />
                    <CircleButton
                        variant='white'
                        icon='cart'
                        onClick={() => dispatch(addToCart({ id, image: images[0], name, price, sale, quantity: 1 }))}
                    />
                    <CircleButton variant='orange' icon='eye' />
                </div>
            </div>
            <div className={styles.wrapper_info}>
                <div className={styles.rating}>
                    <StarRating value={rating} readonly />
                    <Text as='span' size='12' color='gray-500'>
                        (536)
                    </Text>
                </div>
                <Text title={name} as='a' size='14' color='gray-900' lineHeight='140' href={`${ROUTE.SHOP}/${id}`}>
                    {name}
                </Text>
                <Text as='span' weight='600' size='14' color='secondary-500'>
                    {price}
                </Text>
            </div>
        </section>
    )
}
