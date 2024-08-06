'use client'

import { useContext, type FC } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/app/_shared/lib/providers/auth'
import { useAppDispatch, useAppSelector } from '@/app/_shared/store'
import { type ICartItem, removeFromCart } from '@/app/_shared/store/cart'
import { formatNumber } from '@/app/_shared/lib/utils'
import { ROUTE } from '@/app/_shared/lib/enums'
import { Popover } from '@/app/_entities/popover'
import { HorizontalLine } from '@/app/_shared/ui/horizontal-line'
import { Button } from '@/app/_shared/ui/button'
import { Text } from '@/app/_shared/ui/text'
import { Icon } from '@/app/_shared/ui/icon'
import { cn } from '@/app/_shared/lib/classnames'
import productImage from '@/app/_shared/assets/svg/camera.svg'
import styles from './CartPopover.module.scss'

export const CartPopover: FC = (props) => {
    const t = useTranslations('Header.cart-popover')
    const { user } = useContext(AuthContext)
    const { push } = useRouter()
    const { cart } = useAppSelector((state) => state.cart)
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <Popover {...props}>
            <Popover.Button className={cn(styles.button, !cart.length && styles.inactive)} data-cart-length={cart.length}>
                <Icon name='cart' color='gray-00' />
            </Popover.Button>
            <Popover.Body className={styles.body} orientation='right'>
                <div className={styles.body_header}>
                    <Text as='span' color='gray-900'>
                        {t('title')}
                        <Text as='span' color='gray-600'>
                            {' '}
                            ({formatNumber(cart.length)})
                        </Text>
                    </Text>
                </div>
                <HorizontalLine color='gray-100' />
                <ul className={styles.body_list}>
                    {!!cart.length ? (
                        cart.map((item) => <CartItem key={item.id} {...item} />)
                    ) : (
                        <Text className={styles['empty-text']} size='14' as='span' color='gray-600' align='center'>
                            {t('is-empty')}
                        </Text>
                    )}
                </ul>
                <HorizontalLine color='gray-100' />
                <div className={styles.body_footer}>
                    <div className={styles['total-count']}>
                        <Text size='14' as='span' color='gray-700'>
                            {t('total')}
                        </Text>
                        <Text size='14' as='span' color='gray-900' weight='500'>
                            ${cartTotal} USD
                        </Text>
                    </div>
                    <div className={styles['btns-box']}>
                        <Button
                            onClick={() => push(ROUTE.CHECKOUT)}
                            variant='orange'
                            size='small'
                            icon={{ name: 'arrow-right' }}
                            full
                        >
                            {t('btns.checkout')}
                        </Button>
                        <Button
                            onClick={() => push(user ? ROUTE.SHOPPING_CART : ROUTE.LOGIN)}
                            variant='orange-v-2'
                            size='small'
                            full
                        >
                            {t('btns.view')}
                        </Button>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    )
}

const CartItem: FC<ICartItem> = ({ id, name, price, sale, image, quantity }) => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles['item-wrapper']}>
            <Image src={image || productImage} className={styles['item-wrapper_image']} width={80} height={80} alt='' />
            <div className={styles['item-wrapper_heading']}>
                <Text title={name} as='a' href={`${ROUTE.SHOP}/${id}`} size='14' color='gray-900' lineHeight='140'>
                    {name}
                </Text>
                <Text as='span' size='14' color='gray-600'>
                    {quantity} x{' '}
                    <Text as='span' color='secondary-500' weight='600'>
                        {(quantity || 1) * price}
                    </Text>
                </Text>
            </div>
            <button className={styles['item-wrapper_btn']} onClick={() => dispatch(removeFromCart(id))}>
                <Icon name='x-mark' />
            </button>
        </div>
    )
}
