'use client'

import { useState, type FC } from 'react'
import styles from './Slider.module.scss'
import Image from 'next/image'

interface ISliderProps {
    images: string[]
    name: string
}

export const Slider: FC<ISliderProps> = ({ images, name }) => {
    const [selectedImg, setSelectedImg] = useState<string>(images[0])

    return (
        <div className={styles.wrapper}>
            <Image className={styles.wrapper_image} src={selectedImg} width={616} height={464} alt={name} />
            <div className={styles.wrapper_slider}>
                {images
                    .concat(images)
                    .concat(images)
                    .map((src, idx) => (
                        <Image key={idx} src={src} width={96} height={96} alt={name} />
                    ))}
            </div>
        </div>
    )
}
