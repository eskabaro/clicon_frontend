'use client'

import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'
import type { IconsType } from '../../const/icons'
import type { ColorsType } from '../../const/colors'
import { Icon } from '../icon'
import { cn } from '../../lib/classnames'
import styles from './CircleButton.module.scss'

type SizeType = 'small' | 'large'
type VariantType = 'white' | 'orange'

interface ICircleButtonProps extends PropsWithChildren<ComponentPropsWithoutRef<'button'>> {
    variant: VariantType
    size?: SizeType
    borderColor?: ColorsType
    icon?: IconsType
}

export const CircleButton: FC<ICircleButtonProps> = ({ variant, borderColor, icon, size = 'large', children, ...rest }) => {
    return (
        <button className={cn(styles.btn, styles[size], styles[variant])} style={{ borderColor }} {...rest}>
            {icon ? <Icon width={24} height={24} name={icon} /> : children}
        </button>
    )
}
