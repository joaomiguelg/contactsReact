import { PayloadAction, createSlice } from '@reduxjs/toolkit'


type FilterState = {
    term?: string,
}

const initialState: FilterState = {
    term: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        alterTerm: (state, action: PayloadAction<string>) => {
            state.term = action.payload
        },
    }
})

export const { alterTerm } = filterSlice.actions

export default filterSlice.reducer