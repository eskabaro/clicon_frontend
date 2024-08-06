'use client'

import { useCallback, useEffect, useState, type FC } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/app/_shared/store'
import { removeFromCart, setQuantity } from '@/app/_shared/store/cart'
import { ROUTE } from '@/app/_shared/lib/enums'
import { Table } from '@/app/_entities/table'
import { TableList } from '@/app/_entities/table/list'
import { Button } from '@/app/_shared/ui/button'
import { Text } from '@/app/_shared/ui/text'
import { Counter } from '@/app/_shared/ui/counter'
import { Icon } from '@/app/_shared/ui/icon'
import styles from './Table.module.scss'

const headings = ['products', 'price', 'quantity', 'sub-total']

export const ShoppingCartTable: FC = () => {
    const t = useTranslations('Dashboard.shopping-cart.table')
    const { push } = useRouter()
    const { cart } = useAppSelector((state) => state.cart)

    return (
        <Table className={styles.table}>
            <Table.Head>
                <Text as='h1' color='gray-900' size='14' transform='uppercase'>
                    {t('title')}
                </Text>
            </Table.Head>
            <TableList.THead
                items={headings.map((key) => (
                    <Text as='h2' transform='uppercase' size='12' color='gray-700' noWrap>
                        {t(`head.${key}`)}
                    </Text>
                ))}
            />
            <TableList.TBody
                items={cart.map(({ id, image, name, quantity, price }) => ({
                    id,
                    labels: [
                        <ItemName id={id} image={image} name={name} />,
                        <ItemPrice price={quantity * price} />,
                        <ItemCount id={id} defaultQuantity={quantity} />,
                        <Text as='span' size='14' weight='500' color='gray-900'>
                            {price}
                        </Text>
                    ]
                }))}
            />
            <Table.Foot colSpan={4} contentClassName={styles['footer-box']}>
                <Button
                    variant='blue-v-1'
                    size='small'
                    onClick={() => push(ROUTE.SHOP)}
                    icon={{ name: 'arrow-left', orientation: 'left' }}
                >
                    {t('btns.return')}
                </Button>
                <Button variant='blue-v-1' size='small'>
                    {t('btns.update')}
                </Button>
            </Table.Foot>
        </Table>
    )
}

const ItemName: FC<{ id: string; image: string; name: string }> = ({ id, image, name }) => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles['item-name']}>
            <button onClick={() => dispatch(removeFromCart(id))}>
                <Icon name='circle-x-mark' />
            </button>
            <Image src={image} width={72} height={72} alt={name} />
            <Text title={name} as='a' href={`${ROUTE.SHOP}/${id}`} lineHeight='140' size='14' color='gray-900'>
                {name}
            </Text>
        </div>
    )
}

const ItemPrice: FC<{ price: number }> = ({ price }) => {
    return (
        <Text size='14' color='gray-700' as='span'>
            {price}
        </Text>
    )
}

const ItemCount: FC<{ id: string; defaultQuantity: number }> = ({ id, defaultQuantity }) => {
    const [count, setCount] = useState<number>(defaultQuantity)
    const dispatch = useAppDispatch()

    const updateQuantity = useCallback(() => {
        dispatch(setQuantity({ id, value: count }))
    }, [dispatch, id, count])

    useEffect(() => {
        updateQuantity()
    }, [updateQuantity])

    return <Counter count={count} setCount={setCount} />
}
