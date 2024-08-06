'use client'

import type { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/app/_shared/ui/button'
import { Text } from '@/app/_shared/ui/text'
import { HorizontalLine } from '@/app/_shared/ui/horizontal-line'
import styles from './Totals.module.scss'

const totals = [
    { label: 'total', value: '$320' },
    { label: 'shipping', value: 'Free' },
    { label: 'discount', value: '$24' },
    { label: 'tax', value: '$61.99' }
]

export const ShoppingCartTotals: FC = () => {
    const t = useTranslations('Dashboard.shopping-cart.cart-totals')

    return (
        <section className={styles.totals}>
            <div className={styles.totals_info}>
                <Text as='h1' transform='uppercase' size='14' color='gray-900'>
                    {t('title')}
                </Text>
                {totals.map(({ label, value }, idx) => (
                    <div key={idx} className={styles['info-line']}>
                        <Text as='span' color='gray-600' size='14'>
                            {t(`info.${label}`)}
                        </Text>
                        <Text as='span' size='14' color='gray-900' weight='500'>
                            {value}
                        </Text>
                    </div>
                ))}
            </div>
            <HorizontalLine color='gray-100' />
            <div className={styles['totals_submit-box']}>
                <div className={styles['info-line']}>
                    <Text size='16' color='gray-900' as='h3'>
                        {t('total')}
                    </Text>
                    <Text size='16' color='gray-900' weight='600' as='span'>
                        $357.99 USD
                    </Text>
                </div>
                <Button variant='orange' icon={{ name: 'arrow-right' }} full>
                    {t('btn')}
                </Button>
            </div>
        </section>
    )
}
