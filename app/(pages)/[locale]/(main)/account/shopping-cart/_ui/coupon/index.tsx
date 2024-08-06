'use client'

import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Text } from '@/app/_shared/ui/text'
import { Input } from '@/app/_shared/ui/input'
import { Button } from '@/app/_shared/ui/button'
import styles from './Coupon.module.scss'

export const ShoppingCartCoupon: FC = () => {
    const t = useTranslations('Dashboard.shopping-cart.coupon')

    return (
        <section className={styles.coupon}>
            <div className={styles.coupon_heading}>
                <Text as='h1' color='gray-900' size='14' transform='uppercase'>
                    {t('title')}
                </Text>
            </div>
            <div className={styles['coupon_submit-box']}>
                <Input placeholder={t('placeholder')} />
                <Text size='12' color='gray-600' lineHeight='140'>
                    {t('text')}
                </Text>
                <Button variant='blue' size='small'>
                    {t('btn')}
                </Button>
            </div>
        </section>
    )
}
