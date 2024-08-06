'use client'

import type { FC } from 'react'
import type { ColorsType } from '../../const/colors'
import styles from './Spinner.module.scss'

interface ISpinnerProps {
    color?: ColorsType
}

export const Spinner: FC<ISpinnerProps> = ({ color }) => {
    return <div className={styles.spinner} />
}
