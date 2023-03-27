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
			toast.error("removed from cart", {
				position: "bottom-left",
			});
		},
		decreaseCartQuantity: (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id,
			);
			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;
				toast.info("decreased cart quantity", {
					position: "bottom-left",
				});
			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				const nextCartItem = state.cartItems.filter(
					(item) => item.id !== action.payload.id,
				);
				state.cartItems = nextCartItem;
				toast.error("removed from cart", {
					position: "bottom-left",
				});
			}
		},
		clearCart: (state, action) => {
			state.cartItems = [];
			toast.error("cart cleared", {
				position: "bottom-left",
			});
		} 
	},
});

export const { addToCart, removeFromCart, decreaseCartQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
