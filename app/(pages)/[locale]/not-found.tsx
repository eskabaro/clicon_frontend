'use client'

import Image from 'next/image'
import { useTranslations } from 'use-intl'
import { useRouter } from 'next/navigation'
import { ROUTE } from '@/app/_shared/lib/enums'
import { Text } from '@/app/_shared/ui/text'
import { Button } from '@/app/_shared/ui/button'
import NotFoundImage from '../../_shared/assets/images/page-not-found.png'

export default function RootNotFound() {
    const t = useTranslations('Not-Found')
    const { push, back } = useRouter()

    return (
        <section className='container'>
            <Image src={NotFoundImage} width={500} height={500} alt='hot-found' />
            <div>
                <Text as='h1' color='gray-900' size='36' align='center'>
                    {t('title')}
                </Text>
                <Text as='p' color='gray-700' lineHeight='150' align='center'>
                    {t('text')}
                </Text>
                <div>
                    <Button onClick={back} variant='orange' size='small'>
                        {t('btns.back')}
                    </Button>
                    <Button onClick={() => push(ROUTE.HOME)} variant='orange-v-2' size='small'>
                        {t('btns.home')}
                    </Button>
                </div>
            </div>
        </section>
    )
}
