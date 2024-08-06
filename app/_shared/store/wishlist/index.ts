import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IWishlistItem {
    id: string
    image: string
    name: string
    price: number
    sale: number
    availability: string
}

interface IInitialState {
    wishlist: IWishlistItem[]
}

const initialState: IInitialState = {
    wishlist: []
}

const Wishlist = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<IWishlistItem>) => {
            const isToWishlist = state.wishlist.find((e) => e.id === action.payload.id)

            if (!isToWishlist) state.wishlist.unshift(action.payload)
        },
        removeFromWishlist: (state, { payload }: PayloadAction<string>) => {
            const item = state.wishlist.find((e) => e.id === payload)

            if (item) state.wishlist = state.wishlist.filter((e) => e.id !== item.id)
        }
    }
})

export const { addToWishlist, removeFromWishlist } = Wishlist.actions

export default Wishlist.reducer
