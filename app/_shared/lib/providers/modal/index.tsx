import type { FC, PropsWithChildren } from 'react'
import type { IUseModalPropsWithStyles } from '../../hooks/useModal'
import { Portal } from '@/app/_shared/ui/portal'
import { Icon } from '@/app/_shared/ui/icon'
import { cn } from '../../classnames'
import styles from './Modal.module.scss'

interface IModalProps extends PropsWithChildren<IUseModalPropsWithStyles> {}

export const ModalProvider: FC<IModalProps> = ({ isVisible, onClose, children, animation, size = 'small' }) => {
    if (!isVisible) return null

    const animatedStyles = animation === 'out' ? styles['fade-out'] : styles['fade-in']

    return (
        <Portal to='#modal-root'>
            <div className={cn(styles.wrapper, animatedStyles)} onClick={onClose}>
                <div onClick={(e) => e.stopPropagation()} className={cn(styles.wrapper_modal, animatedStyles, styles[size])}>
                    {children}
                    {size === 'large' && (
                        <button className={styles['close-btn']} onClick={onClose}>
                            <Icon name='x-mark' width={20} height={20} color='gray-00' />
                        </button>
                    )}
                </div>
            </div>
        </Portal>
    )
}
