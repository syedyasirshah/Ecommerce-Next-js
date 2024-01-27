import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	cartItems: [],
	totalPrice: 0,
};
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemToCart(state, action) {
			const newItem = { ...action.payload, quantity: 1 };

			state.cartItems.push(newItem);
		},
		deleteItemFromCart(state, action) {
			const productId = action.payload;

			state.cartItems = state.cartItems.filter((item) => item.id !== productId);
		},
		increaseItemQuantity(state, action) {
			const productId = action.payload;
			let newCartItems = state.cartItems.map((cartItem) => {
				if (cartItem.id == productId) {
					return { ...cartItem, quantity: cartItem.quantity + 1 };
				} else return cartItem;
			});
			state.cartItems = newCartItems;
		},
		decreaseItemQuantity(state, action) {
			const productId = action.payload;
			let newCartItems = state.cartItems.map((cartItem) => {
				if (cartItem.id == productId) {
					const newQuantity = cartItem.quantity - 1;
					return newQuantity > 0
						? { ...cartItem, quantity: newQuantity }
						: null;
				} else {
					return cartItem;
				}
			});
			newCartItems = newCartItems.filter((item) => item !== null);
			state.cartItems = newCartItems;
		},
		clearCart(state) {
			state.cartItems = [];
		},
	},
});
export const {
	addItemToCart,
	deleteItemFromCart,
	increaseItemQuantity,
	decreaseItemQuantity,
	clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

// export const getTotalCartItems = (state) =>
// 	state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// export const getTotalCartPrice = (state) =>
// 	state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCart = (state) => state.cart.cartItems;
export const getCurrentCartItem = (id) => (state) =>
	state.cart.cartItems.find((item) => item.id === id)?.quantity ?? 0;
