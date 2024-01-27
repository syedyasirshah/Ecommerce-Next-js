import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			product: productsReducer,
			cart: cartReducer,
		},
	});
};
