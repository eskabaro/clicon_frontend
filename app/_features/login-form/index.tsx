'use client'

import { type FC, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type ILoginBody } from '@/app/_shared/lib/types/auth'
import { AuthContext } from '@/app/_shared/lib/providers/auth'
import AuthService from '@/app/_shared/lib/services/auth.service'
import { ROUTE } from '@/app/_shared/lib/enums'
import { Input } from '@/app/_shared/ui/input'
import { Button } from '@/app/_shared/ui/button'
import { Text } from '@/app/_shared/ui/text'
import styles from './LoginForm.module.scss'

interface IFormFields extends ILoginBody {}

export const LoginForm: FC = () => {
    const t = useTranslations('Auth.login')
    const { push } = useRouter()
    const { setUser } = useContext(AuthContext)
    const [showPass, setShowPass] = useState<boolean>(false)

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<IFormFields>({
        mode: 'onChange'
    })

    const { mutateAsync, isPending } = useMutation({
        mutationKey: ['login'],
        mutationFn: (data: ILoginBody) => AuthService.login(data),
        onSuccess: (data) => {
            push(ROUTE.ACCOUNT)
            setUser(data)
        },
        onError: (error) => {
            console.error(error)
        }
    })

    const onSubmit: SubmitHandler<IFormFields> = async (data) => {
        await mutateAsync(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form_field}>
                <Text as='span' color='gray-900' size='14'>
                    {t('labels.email')}
                </Text>
                <Input {...register('email', { required: true })} type='email' error={!!errors.email} />
            </div>
            <div className={styles.form_field}>
                <Text as='span' color='gray-900' size='14'>
                    {t('labels.password')}
                </Text>
                <Input
                    {...register('password', { required: true })}
                    iconFn={() => setShowPass(!showPass)}
                    error={!!errors.password}
                    type={showPass ? 'text' : 'password'}
                    icon={showPass ? 'eye' : 'eye-slash'}
                />
            </div>
            <Button
                loading={isPending}
                disabled={isPending}
                size='small'
                variant='orange'
                type='submit'
                icon={{ name: 'arrow-right' }}
                full
            >
                {t('submit-btn')}
            </Button>
        </form>
    )
}
