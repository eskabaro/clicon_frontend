'use client'

import { type Dispatch, type SetStateAction, useState, type FC } from 'react'
import { Icon } from '../icon'
import { cn } from '../../lib/classnames'
import styles from './StarRating.module.scss'

interface IStarRatingProps {
    value: number
    setValue?: Dispatch<SetStateAction<number>>
    readonly?: boolean
}

export const StarRating: FC<IStarRatingProps> = ({ setValue, value, readonly }) => {
    const [hover, setHover] = useState<null | number>(null)
    const onHover = (rating: number) =>
        !readonly && { onMouseEnter: () => setHover(rating), onMouseLeave: () => setHover(null) }

    return (
        <div className={styles.wrapper}>
            {[...Array(5)].map((_, idx) => {
                const ratingValue = idx + 1

                return (
                    <label
                        key={idx}
                        title={`${value.toString()}/5`}
                        className={cn(
                            styles.wrapper_star,
                            ratingValue === value && styles.active,
                            readonly && styles.readonly
                        )}
                        {...onHover(ratingValue)}
                    >
                        <input type='radio' name='rating' value={ratingValue} onClick={() => setValue?.(ratingValue)} />
                        <Icon name={ratingValue <= (hover || value) ? 'star-gold' : 'star'} />
                    </label>
                )
            })}
        </div>
    )
}
