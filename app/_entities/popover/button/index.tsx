'use client'

import { type ComponentPropsWithoutRef, type FC, useEffect, useRef } from 'react'
import { usePopoverContext } from '@/app/_shared/lib/providers/popover'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './Button.module.scss'

interface IPopoverButtonProps extends ComponentPropsWithoutRef<'button'> {
    handleFn?: () => any
}

export const PopoverButton: FC<IPopoverButtonProps> = ({ children, className, onClick, handleFn, ...rest }) => {
    const { onOpen, setBtnHeight } = usePopoverContext()
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (buttonRef.current) {
            const height = buttonRef.current.offsetHeight
            setBtnHeight(height)
        }
    }, [])

    return (
        <button
            {...rest}
            ref={buttonRef}
            className={cn(styles.button, className)}
            onClick={(e) => {
                onClick?.(e)
                handleFn ? handleFn() : onOpen()
            }}
        >
            {children}
        </button>
    )
}
