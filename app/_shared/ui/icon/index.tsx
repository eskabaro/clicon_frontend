import type { FC, SVGProps } from 'react'
import type { ColorsType } from '../../const/colors'
import { icons, type IconsType } from '../../const/icons'
import { cn } from '../../lib/classnames'

interface IIconProps extends SVGProps<SVGSVGElement> {
    name: IconsType
    color?: ColorsType
}

export const Icon: FC<IIconProps> = ({ name, color, className, ...svgProps }) => {
    const Svg = icons[name]

    return <Svg className={cn(color && `color_${color}`, className)} {...svgProps} />
}
