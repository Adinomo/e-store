import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartItems: [],
		cartTotalQuantity: 0,
		cartTotalAmount: 0,
	},
	reducers: {
		addToCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id,
			);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1
			} else {
				const tempProduct = {...action.payload, cartQuantity: 1};
				state.cartItems.push(tempProduct);
			}
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
