'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './_styles/Checkout.module.scss'

interface IFormFields {
    firstName: string
    lastName: string
    companyName?: string
    address: string
    country: string
    regionState: string
    city: string
    zipCode: string
    email: string
    phoneNumber: string
    paymentOption: string
    nameCard: string
    cardNumber: string
    expireDate: string
    cvc: string
    orderNotes?: string
}

export default function Checkout() {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<IFormFields>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IFormFields> = async (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
            Checkout
        </form>
    )
}
