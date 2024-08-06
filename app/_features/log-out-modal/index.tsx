'use client'

import { type FC } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import type { IUseModalProps } from '@/app/_shared/lib/hooks/useModal'
import TokensService from '@/app/_shared/lib/services/tokens.service'
import { ROUTE } from '@/app/_shared/lib/enums'
import { Modal } from '@/app/_entities/modal'
import { Button } from '@/app/_shared/ui/button'
import { Text } from '@/app/_shared/ui/text'

interface ILogOutModalProps extends IUseModalProps {}

export const LogOutModal: FC<ILogOutModalProps> = (props) => {
    const t = useTranslations('Dashboard.log-out-modal')
    const { push } = useRouter()

    const handleLogOut = () => {
        TokensService.remove()
        push(ROUTE.HOME)
    }

    return (
        <Modal {...props}>
            <Modal.Head onClose={props.onClose}>
                <Text size='14' color='gray-900' transform='uppercase'>
                    {t('message')}
                </Text>
            </Modal.Head>

            <Modal.Footer>
                <Button variant='orange' size='small' onClick={handleLogOut} full>
                    {t('btns.ok')}
                </Button>
                <Button variant='orange-v-1' size='small' onClick={props.onClose} full>
                    {t('btns.cancel')}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
