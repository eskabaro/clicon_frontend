'use client'

import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'
import type { IconsType } from '../../const/icons'
import type { ColorsType } from '../../const/colors'
import { Icon } from '../icon'
import { Spinner } from '../spinner'
import { cn } from '../../lib/classnames'
import styles from './Button.module.scss'

type VariantType =
    | 'orange'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'red'
    | 'orange-v-1'
    | 'blue-v-1'
    | 'green-v-1'
    | 'yellow-v-1'
    | 'red-v-1'
    | 'orange-v-2'
    | 'blue-v-2'
    | 'green-v-2'
    | 'yellow-v-2'
    | 'red-v-2'
type SizeType = 'small' | 'large'

type IconType = {
    name: IconsType
    color?: ColorsType
    size?: number
    orientation?: 'left' | 'right'
}

interface IButtonProps extends PropsWithChildren<ComponentPropsWithoutRef<'button'>> {
    variant: VariantType
    icon?: IconType
    loading?: boolean
    size?: SizeType
    full?: boolean
}

export const Button: FC<IButtonProps> = ({ variant, size, icon, full, loading, className, children, ...rest }) => {
    const iconSize = icon?.size || 20
    const orientation = icon?.orientation || 'right'

    const renderIcon = icon && <Icon {...icon} width={iconSize} height={iconSize} />

    return (
        <button
            className={cn(styles.button, className, styles[variant], size && styles[size], full && styles.full)}
            {...rest}
        >
            {loading ? (
                <>
                    <Spinner color='gray-00' />
                    {children}
                    {orientation === 'right' && renderIcon}
                </>
            ) : (
                <>
                    {orientation === 'left' && renderIcon}
                    {children}
                    {orientation === 'right' && renderIcon}
                </>
            )}
        </button>
    )
}
