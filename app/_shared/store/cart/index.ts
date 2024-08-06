import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface ICartItem {
    id: string
    image: string
    name: string
    quantity: number
    price: number
    sale: number
}

interface IInitialState {
    cart: ICartItem[]
}

const initialState: IInitialState = {
    cart: []
}

const Cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartItem>) => {
            const isToCart = state.cart.find((e) => e.id === action.payload.id)

            if (!isToCart) state.cart.unshift(action.payload)
        },
        removeFromCart: (state, { payload }: PayloadAction<string>) => {
            const item = state.cart.find((e) => e.id === payload)

            if (item) state.cart = state.cart.filter((e) => e.id !== item.id)
        },
        setQuantity: (state, { payload }: PayloadAction<{ id: string; value: number }>) => {
            const item = state.cart.find((e) => e.id === payload.id)

            if (item) item.quantity = payload.value
        }
    }
})

export const { addToCart, removeFromCart, setQuantity } = Cart.actions

export default Cart.reducer
