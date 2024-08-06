import { useEffect, useState } from 'react'
import { lockScroll, unlockScroll } from '../utils'

type AnimationType = 'in' | 'out'
type ModalSizeType = 'small' | 'large'

export interface IUseModalProps {
    isVisible: boolean
    onOpen: () => void
    onClose: () => void
    animation: AnimationType
}

export interface IUseModalPropsWithStyles extends IUseModalProps {
    size?: ModalSizeType
}

const animationTiming = 150

export const useModal = (): IUseModalProps => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [animation, setAnimation] = useState<AnimationType>('in')

    const onClose = () => {
        setAnimation('out')
        setTimeout(() => setIsVisible(false), animationTiming)
    }

    useEffect(() => {
        setAnimation('in')
        ;(isVisible ? lockScroll : unlockScroll)()
    }, [isVisible])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return { isVisible, onOpen: () => setIsVisible(true), onClose, animation }
}
