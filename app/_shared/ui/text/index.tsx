'use client'

import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react'
import type { ColorsType } from '../../const/colors'
import { cn } from '../../lib/classnames'
import styles from './Text.module.scss'

type TextWeightType = '400' | '500' | '600' | '700'
type TextSizeType = '8' | '10' | '12' | '14' | '16' | '18' | '20' | '24' | '28' | '30' | '32' | '34' | '36'
type TextLineHeightType = '100' | '120' | '130' | '140' | '150'
type TextTransformType = 'capitalize' | 'lowercase' | 'uppercase'
interface TextPropsType {
    children?: ReactNode
    weight?: TextWeightType
    size?: TextSizeType
    mdSize?: TextSizeType
    smSize?: TextSizeType
    lineHeight?: TextLineHeightType
    align?: 'left' | 'center' | 'right'
    color?: ColorsType
    className?: string
    transform?: TextTransformType
    noWrap?: boolean
}

type TextElementType = 'div' | 'p' | 'a' | 'span' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type AdditionalTextPropsType<T extends TextElementType | ComponentType> = T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : ComponentPropsWithoutRef<T>
type Props<T extends TextElementType | ComponentType> = {
    as?: T
} & TextPropsType &
    AdditionalTextPropsType<T>

export const Text = <T extends TextElementType | ComponentType<any> = 'p'>({
    as,
    children,
    size,
    mdSize,
    smSize,
    weight,
    lineHeight,
    color,
    align,
    transform,
    className,
    noWrap,
    ...rest
}: Props<T>) => {
    const Component = as || 'p'

    return (
        <Component
            className={cn(
                className,
                size && styles[`size-${size}`],
                mdSize && styles[`md-size-${mdSize}`],
                smSize && styles[`sm-size-${smSize}`],
                weight && styles[`weight-${weight}`],
                lineHeight && styles[`line-height-${lineHeight}`],
                transform && styles[`transform-${transform}`],
                noWrap && styles.nowrap,
                `text-${align || 'left'}`,
                `color_${color || 'gray-00'}`
            )}
            {...rest}
        >
            {children}
        </Component>
    )
}
