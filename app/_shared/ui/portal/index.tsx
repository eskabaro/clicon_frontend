import { type FC, type ReactElement, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
    children: ReactElement
    to?: string
}

export const Portal: FC<IPortalProps> = ({ children, to }) => {
    const isClient = typeof window !== 'undefined'
    const [container, setContainer] = useState<HTMLElement | null>(null)

    useEffect(() => {
        if (!isClient) return

        let containerElement = to ? document.querySelector<HTMLElement>(to) : document.body

        if (!to) {
            containerElement = document.createElement('div')
            document.body.appendChild(containerElement)
        }

        setContainer(containerElement)

        return () => {
            if (!to && containerElement) {
                containerElement.remove()
            }
        }
    }, [to, isClient])

    if (!isClient || !container) {
        return children
    }

    return createPortal(children, container)
}
