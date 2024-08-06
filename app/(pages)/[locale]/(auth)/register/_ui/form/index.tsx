'use client'

import { type FC, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type IRegisterBody } from '@/app/_shared/lib/types/auth'
import AuthService from '@/app/_shared/lib/services/auth.service'
import { ROUTE } from '@/app/_shared/lib/enums'
import { Input } from '@/app/_shared/ui/input'
import { Button } from '@/app/_shared/ui/button'
import { Text } from '@/app/_shared/ui/text'
import styles from './Form.module.scss'

interface IFormFields extends IRegisterBody {}

export const RegisterForm: FC = () => {
    const t = useTranslations('Auth.register')
    const { push } = useRouter()
    const [showPass, setShowPass] = useState<boolean>(false)
    const [checkPolicy, setCheckPolicy] = useState<boolean>(false)

    const {
        handleSubmit,
        register,
        formState: { errors, isValid }
    } = useForm<IFormFields>({
        mode: 'onChange'
    })

    const { mutateAsync } = useMutation({
        mutationKey: ['register'],
        mutationFn: (data: IRegisterBody) => AuthService.register(data),
        onSuccess: () => push(ROUTE.HOME),
        onError: () => {
            console.log('error')
        }
    })

    const onSubmit: SubmitHandler<IFormFields> = async (data) => {
        await mutateAsync(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form_field}>
                <Text as='span' color='gray-900' size='14'>
                    {t('labels.first-name')}
                </Text>
                <Input error={!!errors.firstName} {...register('firstName', { required: true })} />
            </div>
            <div className={styles.form_field}>
                <Text as='span' color='gray-900' size='14'>
                    {t('labels.last-name')}
                </Text>
                <Input error={!!errors.lastName} {...register('lastName', { required: true })} />
            </div>
            <div className={styles.form_field}>
                <Text as='span' color='gray-900' size='14'>
                    {t('labels.email')}
                </Text>
                <Input error={!!errors.email} {...register('email', { required: true })} />
            </div>
            <div className={styles.form_field}>
                <Text as='span' color='gray-900' size='14'>
                    {t('labels.password')}
                </Text>
                <Input
                    error={!!errors.password}
                    {...register('password', { required: true })}
                    iconFn={() => setShowPass(!showPass)}
                    type={showPass ? 'text' : 'password'}
                    icon={showPass ? 'eye' : 'eye-slash'}
                />
            </div>
            <label className={styles.form_checkbox}>
                <input type='checkbox' checked={checkPolicy} onChange={() => setCheckPolicy(!checkPolicy)} />
                <Text size='14' smSize='12' weight='500' color='gray-700'>
                    Are you agree to Clicon{' '}
                    <Text as='a' href='#' color='secondary-500'>
                        Terms of Condition
                    </Text>{' '}
                    and{' '}
                    <Text as='a' href='#' color='secondary-500'>
                        Privacy Policy.
                    </Text>
                </Text>
            </label>
            <Button
                type='submit'
                disabled={!isValid || !checkPolicy}
                variant='orange'
                size='small'
                icon={{ name: 'arrow-right' }}
                full
            >
                {t('submit-btn')}
            </Button>
        </form>
    )
}
