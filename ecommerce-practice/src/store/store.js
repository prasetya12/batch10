import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
    }
})