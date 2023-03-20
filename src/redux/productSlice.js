import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callApi from "../api/products";

export const fetchProducts = () => {
	return (dispatch) => {
		return callApi('GET', null).then(res => {
			dispatch(getAllProducts(res.data));
		})
	}
}

export const todoSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
		loading: true,
		error_msg: "",
	},
	extraReducers: (builder) => {
		builder.addCase(callApi.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(callApi.fulfilled, (state, action) => {
			state.loading = false
			state.products = action.payload
			state.error_msg = ""
		})
		builder.addCase(callApi.rejected, (state, action) => {
			state.loading = false
			state.products = []
			state.error_msg = action.error.message
		})
	}
})

export const { getAllProducts } = todoSlice.actions;

export default todoSlice.reducer;