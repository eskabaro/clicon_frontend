'use client'

import { Table } from '@/app/_entities/table'
import Image from 'next/image'
import { TableList } from '@/app/_entities/table/list'
import type { FC } from 'react'
import { Text } from '@/app/_shared/ui/text'
import { Button } from '@/app/_shared/ui/button'
import { useAppDispatch, useAppSelector } from '@/app/_shared/store'
import styles from './Table.module.scss'
import { ROUTE } from '@/app/_shared/lib/enums'
import { Icon } from '@/app/_shared/ui/icon'
import { removeFromWishlist } from '@/app/_shared/store/wishlist'
import { addToCart, ICartItem } from '@/app/_shared/store/cart'

const headings = ['Products', 'Price', 'Stock Status', 'Actions']

export const WishlistTable: FC = () => {
    const { wishlist } = useAppSelector((state) => state.wishlist)

    return (
        <Table>
            <Table.Head>
                <Text as='h1' color='gray-900' size='14' transform='uppercase'>
                    Wishlist
                </Text>
            </Table.Head>
            <TableList.THead
                items={headings.map((item) => (
                    <Text as='h2' transform='uppercase' size='12' color='gray-700' noWrap>
                        {item}
                    </Text>
                ))}
            />
            <TableList.TBody
                items={wishlist.map(({ id, image, name, availability, sale, price }) => ({
                    id,
                    labels: [
                        <ItemName id={id} image={image} name={name} />,
                        <ItemPrice price={price} sale={sale} />,
                        <ItemStockStatus status={availability} />,
                        <ItemActions id={id} image={image} quantity={1} sale={sale} price={price} name={name} />
                    ]
                }))}
            />
        </Table>
    )
}

const ItemName: FC<{ id: string; image: string; name: string }> = ({ id, image, name }) => {
    return (
        <div className={styles['item-name']}>
            <Image src={image} width={72} height={72} alt={name} />
            <Text title={name} as='a' href={`${ROUTE.SHOP}/${id}`} lineHeight='140' size='14' color='gray-900'>
                {name}
            </Text>
        </div>
    )
}

const ItemPrice: FC<{ price: number; sale?: number }> = ({ price }) => {
    return (
        <Text size='14' color='gray-700' as='span'>
            {price}
        </Text>
    )
}

const ItemStockStatus: FC<{ status: string }> = ({ status }) => {
    return (
        <Text as='span' size='14' weight='600' color='success-500' transform='uppercase'>
            {status}
        </Text>
    )
}

const ItemActions: FC<ICartItem> = (props) => {
    const dispatch = useAppDispatch()
    const { cart } = useAppSelector((state) => state.cart)
    const isToCart = cart.find((e) => e.id === props.id)

    return (
        <div className={styles['actions-box']}>
            <Button
                disabled={!!isToCart}
                onClick={() => dispatch(addToCart(props))}
                variant='orange'
                size='small'
                icon={{ name: 'cart', size: 20 }}
            >
                add to card
            </Button>
            <button onClick={() => dispatch(removeFromWishlist(props.id))}>
                <Icon name='circle-x-mark' color='gray-400' />
            </button>
        </div>
    )
}
