'use client'

import type { ComponentPropsWithoutRef, FC } from 'react'
import { usePopoverContext } from '@/app/_shared/lib/providers/popover'
import { useClickOutside } from '@/app/_shared/lib/hooks/useClickOutside'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './List.module.scss'

interface IPopoverListProps extends ComponentPropsWithoutRef<'div'> {
    show?: boolean
    orientation?: 'left' | 'right'
}

export const PopoverList: FC<IPopoverListProps> = ({ children, className, orientation = 'right', ...rest }) => {
    const { open, onClose, btnHeight } = usePopoverContext()
    const ref = useClickOutside(onClose)

    if (!open) return null

    return (
        <div
            {...rest}
            ref={ref}
            style={{ top: `${btnHeight + 12}px`, [orientation]: 0 }}
            className={cn(styles.list, className)}
        >
            {children}
        </div>
    )
}
