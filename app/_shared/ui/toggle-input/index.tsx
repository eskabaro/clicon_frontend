'use client'

import { forwardRef, type InputHTMLAttributes, type PropsWithChildren } from 'react'
import styles from './ToggleInput.module.scss'

interface IToggleInputProps extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
    type: 'radio' | 'checkbox'
}

export const ToggleInput = forwardRef<HTMLInputElement, IToggleInputProps>(({ children, id, ...rest }, ref) => {
    return (
        <label htmlFor={id} className={styles.wrapper}>
            <input ref={ref} id={id} {...rest} />
            {children}
        </label>
    )
})

ToggleInput.displayName = 'ToggleInput'
