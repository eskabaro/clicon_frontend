'use client'

import type { FC } from 'react'
import { ShopLayout } from '@/app/_entities/shop-layout'
import { HorizontalLine } from '@/app/_shared/ui/horizontal-line'
import { type IProductsRes, type ISearchParams } from '@/app/_shared/lib/types/product'
import { Header } from '../header'
import { ProductItem } from '@/app/_features/product-item'
import { Category } from '../category'
import { Brand } from '../brand'
import { PriceRange } from '../price-range'
import styles from './Main.module.scss'

interface IMainProps extends IProductsRes {
    searchParams: ISearchParams
}

export const Main: FC<IMainProps> = ({ categories, products, brands, price, length, searchParams }) => {
    return (
        <ShopLayout>
            <aside className={styles.aside}>
                <Category data={categories} />
                <HorizontalLine color='gray-100' />
                <Brand data={brands} />
                <HorizontalLine color='gray-100' />
                <PriceRange {...price} />
            </aside>
            <section className={styles.wrapper}>
                <Header length={length} searchParams={searchParams} />
                <div className={styles.wrapper_net}>
                    {products.map((item) => (
                        <ProductItem key={item.id} {...item} />
                    ))}
                </div>
            </section>
        </ShopLayout>
    )
}
