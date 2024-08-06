import type { Metadata } from 'next'
import { WishlistTable } from './_ui/table'

export const metadata: Metadata = {
    title: 'Wishlist'
}

export default function Wishlist() {
    return <WishlistTable />
}
