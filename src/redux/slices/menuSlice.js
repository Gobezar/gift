import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    isMenuOpen: false
}

const menuSlice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers: {
        setIsMenuOpen(state, action) {
            state.isMenuOpen = !state.isMenuOpen
        }
    },
})

export const { setIsMenuOpen } = menuSlice.actions;

export default menuSlice.reducer