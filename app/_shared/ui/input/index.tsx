'use client'

import { forwardRef, type InputHTMLAttributes } from 'react'
import type { IconsType } from '../../const/icons'
import { Icon } from '../icon'
import { cn } from '../../lib/classnames'
import styles from './Input.module.scss'

type SizeType = 'small' | 'large'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputSize?: SizeType
    icon?: IconsType
    error?: boolean
    iconFn?: () => void
    full?: boolean
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({ inputSize, error, className, icon, name, iconFn, full, ...rest }, ref) => {
        return (
            <label
                className={cn(
                    styles['input-box'],
                    className,
                    error && styles.error,
                    inputSize && styles.inputSize,
                    full && styles.full
                )}
            >
                <input ref={ref} className={styles['input-box_input']} name={name} {...rest} />
                {icon && <Icon name={icon} cursor={iconFn && 'pointer'} onClick={iconFn} />}
            </label>
        )
    }
)

Input.displayName = 'Input'
