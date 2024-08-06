'use client'

import type { ComponentPropsWithoutRef, Dispatch, FC, MouseEventHandler, SetStateAction } from 'react'
import { usePopoverContext } from '@/app/_shared/lib/providers/popover'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './ListItem.module.scss'

interface IPopoverListItemProps extends ComponentPropsWithoutRef<'button'> {
    value?: string
    setValue?: Dispatch<SetStateAction<string>>
    isActive?: boolean
}

export const PopoverListItem: FC<IPopoverListItemProps> = ({
    onClick,
    setValue,
    value,
    className,
    isActive,
    children,
    ...rest
}) => {
    const { onClose } = usePopoverContext()

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        onClick?.(e)
        onClose()
        setValue?.(value!)
    }

    return (
        <button onClick={handleClick} className={cn(styles.item, className, isActive && styles.active)} {...rest}>
            {children}
        </button>
    )
}
