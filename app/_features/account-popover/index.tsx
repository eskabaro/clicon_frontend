'use client'

import { useContext, type FC } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/app/_shared/lib/providers/auth'
import { ROUTE } from '@/app/_shared/lib/enums'
import { LoginForm } from '../login-form'
import { Popover } from '@/app/_entities/popover'
import { HorizontalLine } from '@/app/_shared/ui/horizontal-line'
import { Icon } from '@/app/_shared/ui/icon'
import { Text } from '@/app/_shared/ui/text'
import { Button } from '@/app/_shared/ui/button'
import styles from './AccountPopover.module.scss'

export const AccountPopover: FC = (props) => {
    const t = useTranslations('Header.account-popover')
    const { user } = useContext(AuthContext)
    const { push } = useRouter()

    const handleButtonClick = user && {
        handleFn: () => push(ROUTE.ACCOUNT)
    }

    return (
        <Popover {...props}>
            <Popover.Button className={styles.button} {...handleButtonClick}>
                <Icon name='user' />
            </Popover.Button>
            <Popover.Body orientation='right' className={styles.body}>
                <Text as='h1' color='gray-900' align='center' size='20' weight='600'>
                    {t('title')}
                </Text>
                <LoginForm />
                <HorizontalLine color='gray-100'>
                    <Text as='span' color='gray-500' size='14'>
                        {t('don’t-have')}
                    </Text>
                </HorizontalLine>
                <Button onClick={() => push(ROUTE.REGISTER)} variant='orange-v-2' size='small' full>
                    {t('btn')}
                </Button>
            </Popover.Body>
        </Popover>
    )
}
