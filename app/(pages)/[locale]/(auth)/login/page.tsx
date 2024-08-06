import type { Metadata } from 'next'
import { LoginForm } from '../../../../_features/login-form'

export const metadata: Metadata = {
    title: 'Login'
}

export default function Login() {
    return <LoginForm />
}
