'use client'

import type { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '../../assets/svg/logo.svg'
import styles from './Logo.module.scss'

export const Logo: FC = () => {
    return (
        <Link className={styles.logo} href={'/'}>
            <Image src={LogoImg} width={177} height={48} alt='Logo' priority />
        </Link>
    )
}
