'use client'

import type { ComponentPropsWithoutRef, FC } from 'react'
import { usePopoverContext } from '@/app/_shared/lib/providers/popover'
import { useClickOutside } from '@/app/_shared/lib/hooks/useClickOutside'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './Body.module.scss'

interface IPopoverBodyProps extends ComponentPropsWithoutRef<'div'> {
    show?: boolean
    orientation?: 'right' | 'left'
}

export const PopoverBody: FC<IPopoverBodyProps> = ({ orientation = 'right', className, children, ...rest }) => {
    const { open, onClose, btnHeight } = usePopoverContext()
    const ref = useClickOutside(onClose)

    if (!open) return null

    return (
        <div
            {...rest}
            ref={ref}
            style={{ top: `${btnHeight + 12}px`, [orientation]: 0 }}
            className={cn(styles.body, className)}
        >
            {children}
        </div>
    )
}
