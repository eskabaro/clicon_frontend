'use client'

import type { FC } from 'react'
import { IAllProduct } from '@/app/_shared/lib/types/product'
import { useAppDispatch } from '@/app/_shared/store'
import { addToCart } from '@/app/_shared/store/cart'
import { ProductDetails } from '@/app/_features/product-details'

interface IMainProps extends IAllProduct {}

export const Main: FC<IMainProps> = (props) => {
    const dispatch = useAppDispatch()

    return (
        <section>
            {/* <button onClick={() => dispatch(addToCart({ id, quantity: 1, price, name, image: images[0], sale }))}>
                add to cart
            </button> */}

            <ProductDetails {...props} />
        </section>
    )
}
