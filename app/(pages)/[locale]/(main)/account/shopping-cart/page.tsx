import type { Metadata } from 'next'
import { ShoppingCartTable } from './_ui/table'
import { ShoppingCartTotals } from './_ui/totals'
import { ShoppingCartCoupon } from './_ui/coupon'
import styles from './_styles/ShoppingCart.module.scss'

export const metadata: Metadata = {
    title: 'Shopping Cart'
}

export default function ShoppingCart() {
    return (
        <div className={styles.wrapper}>
            <ShoppingCartTable />
            <ShoppingCartTotals />
            <ShoppingCartCoupon />
        </div>
    )
}
