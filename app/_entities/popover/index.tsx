'use client'

import { type ComponentPropsWithoutRef, forwardRef, type FC, useState, type ForwardedRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { PopoverContext } from '@/app/_shared/lib/providers/popover'
import { PopoverButton } from './button'
import { PopoverList } from './list'
import { PopoverBody } from './body'
import { PopoverListItem } from './list-item'
import { cn } from '@/app/_shared/lib/classnames'
import styles from './Popover.module.scss'

interface IPopoverProps extends ComponentPropsWithoutRef<'div'> {}

const PopoverComponent: FC<IPopoverProps> = forwardRef(
    ({ className, children, ...rest }, ref: ForwardedRef<HTMLDivElement>) => {
        const pathname = usePathname()
        const [open, setOpen] = useState(false)
        const [btnHeight, setBtnHeight] = useState(0)

        const onOpen = () => setOpen(true)
        const onClose = () => setOpen(false)

        useEffect(() => onClose(), [pathname])

        return (
            <PopoverContext.Provider value={{ open, onOpen, onClose, btnHeight, setBtnHeight }}>
                <div {...rest} className={cn(styles.wrapper, className)} ref={ref}>
                    {children}
                </div>
            </PopoverContext.Provider>
        )
    }
)

export const Popover = Object.assign(PopoverComponent, {
    Button: PopoverButton,
    List: PopoverList,
    ListItem: PopoverListItem,
    Body: PopoverBody
})
