'use client'

import type { FC, PropsWithChildren } from 'react'
import type { IUseModalPropsWithStyles } from '@/app/_shared/lib/hooks/useModal'
import { ModalProvider } from '@/app/_shared/lib/providers/modal'
import { ModalHead } from './head'
import { ModalBody } from './body'
import { ModalFooter } from './footer'

interface IModalProps extends PropsWithChildren<IUseModalPropsWithStyles> {}

const ModalComponent: FC<IModalProps> = ({ children, ...rest }) => {
    return <ModalProvider {...rest}>{children}</ModalProvider>
}

export const Modal = Object.assign(ModalComponent, {
    Head: ModalHead,
    Body: ModalBody,
    Footer: ModalFooter
})
