import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataCall } from "../../services/product.service";

export const getProductCall = createAsyncThunk("product/getDataProduct", async () => {
    const data = fetchDataCall()
    return data
})