import { createSlice } from "@reduxjs/toolkit"
import { getProductCall } from "../actions/productAction"
const initialState = {
    data: [],
    isLoading: true,
    testData: 'Hello Test'
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProductCall.fulfilled, (state, action) => {
            state.data = action.payload.data.products
        })
    }
})

export default productSlice.reducer