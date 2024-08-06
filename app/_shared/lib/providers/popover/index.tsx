import { type Dispatch, type SetStateAction, createContext, useContext } from 'react'

interface IPopoverContextProps {
    open: boolean
    onClose: () => void
    onOpen: () => void
    btnHeight: number
    setBtnHeight: Dispatch<SetStateAction<number>>
}

export const PopoverContext = createContext<IPopoverContextProps>(null!)

export const usePopoverContext = () => {
    const props = useContext(PopoverContext)

    if (!props) throw new Error('No popover context found!')

    return props
}
