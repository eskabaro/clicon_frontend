'use client'

import { useContext, type FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { AuthContext } from '@/app/_shared/lib/providers/auth'
import { useAppDispatch, useAppSelector } from '@/app/_shared/store'
import { type IWishlistItem, removeFromWishlist } from '@/app/_shared/store/wishlist'
import { ROUTE } from '@/app/_shared/lib/enums'
import { Icon } from '@/app/_shared/ui/icon'
import { Popover } from '@/app/_entities/popover'
import { HorizontalLine } from '@/app/_shared/ui/horizontal-line'
import { Text } from '@/app/_shared/ui/text'
import { Button } from '@/app/_shared/ui/button'
import { cn } from '@/app/_shared/lib/classnames'
import productImage from '@/app/_shared/assets/svg/camera.svg'
import styles from './WishlistPopover.module.scss'

export const WishlistPopover: FC = (props) => {
    const t = useTranslations('Header.wishlist-popover')
    const { user } = useContext(AuthContext)
    const { push } = useRouter()
    const { wishlist } = useAppSelector((state) => state.wishlist)

    return (
        <Popover {...props}>
            <Popover.Button
                className={cn(styles.button, !wishlist.length && styles.inactive)}
                data-cart-length={wishlist.length}
            >
                <Icon name='heart' />
            </Popover.Button>
            <Popover.Body className={styles.body} orientation='right'>
                <div className={styles.body_header}>
                    <Text as='span' color='gray-900'>
                        {t('title')}
                        <Text as='span' color='gray-600'>
                            {' '}
                            (02)
                        </Text>
                    </Text>
                </div>
                <HorizontalLine color='gray-100' />
                <ul className={styles.body_list}>
                    {!!wishlist.length ? (
                        wishlist.map((item) => <WishlistItem key={item.id} {...item} />)
                    ) : (
                        <Text className={styles['empty-text']} size='14' as='span' color='gray-600' align='center'>
                            {t('is-empty')}
                        </Text>
                    )}
                </ul>
                <HorizontalLine color='gray-100' />
                <div className={styles.body_footer}>
                    <div className={styles['btns-box']}>
                        <Button onClick={() => push(user ? ROUTE.WISHLIST : ROUTE.LOGIN)} variant='orange' size='small' full>
                            {t('btns.view')}
                        </Button>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    )
}

const WishlistItem: FC<IWishlistItem> = ({ id, name, price, image }) => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles['item-wrapper']}>
            <Image src={image || productImage} className={styles['item-wrapper_image']} width={80} height={80} alt={name} />
            <div className={styles['item-wrapper_heading']}>
                <Text title={name} as='a' href={`${ROUTE.SHOP}/${id}`} size='14' color='gray-900' lineHeight='140'>
                    {name}
                </Text>
                <Text as='span' size='14' color='gray-600'>
                    <Text as='span' color='secondary-500' weight='600'>
                        {price}
                    </Text>
                </Text>
            </div>
            <button className={styles['item-wrapper_btn']} onClick={() => dispatch(removeFromWishlist(id))}>
                <Icon name='x-mark' />
            </button>
        </div>
    )
}
