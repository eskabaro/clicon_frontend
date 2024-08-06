import type { Metadata } from 'next'
import { RegisterForm } from './_ui/form'

export const metadata: Metadata = {
    title: 'Registration'
}

export default function Register() {
    return <RegisterForm />
}
