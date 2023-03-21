import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

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
				state.cartItems[itemIndex].cartQuantity += 1;
				toast.info("increased product quantity", {
					position: "bottom-left",
				})
			} else {
				const tempProduct = {...action.payload, cartQuantity: 1};
				state.cartItems.push(tempProduct);
				toast.success("added a new product to cart", {
					position: "bottom-left",
				})
			}
		},
		removeFromCart: (state, action) => {
			const nextCartItem = state.cartItems.filter(
				item => item.id !== action.payload.id
			);
			state.cartItems = nextCartItem;
		}
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
