import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: JSON.parse(localStorage.getItem("cart") as any) ?? [],
	// status: "idle",
	// error: null,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const newCartItem = state.cart.find(
				(item: any) => item.id === action.payload.id
			);

			if (newCartItem) {
				state.cart.map((item: any) =>
					item.id === action.payload.id
						? { newCartItem, quantity: item.quantity + 1 }
						: item
				);
			} else {
				state.cart.push({ ...action.payload, quantity: 1 });
			}

			localStorage.setItem("cart", JSON.stringify(state.cart));
		},
		removeFromCart: (state, action) => {
			const updatedCart = state.cart.filter(
				(p: any) => p.id !== action.payload.id
			);
			state.cart = updatedCart;
			localStorage.setItem("cart", JSON.stringify(state.cart));
		},
		removeAll: (state, action) => {
			state.cart = [];
			localStorage.setItem("cart", JSON.stringify(state.cart));
		},

		reduceProduct(state, action) {
			const itemIndex = state.cart.findIndex(
				(item: any) => item.id === action.payload.id
			);

			if (state.cart[itemIndex].quantity > 1) {
				state.cart[itemIndex].quantity -= 1;
			} else if (state.cart[itemIndex].quantity === 1) {
				const updatedCart = state.cart.filter(
					(p: any) => p.id !== action.payload.id
				);
				state.cart = updatedCart;
			}
			localStorage.setItem("cart", JSON.stringify(state.cart));
		},
		incrementProduct(state, action) {
			const itemIndex = state.cart.findIndex(
				(item: any) => item.id === action.payload.id
			);
			if (state.cart[itemIndex].quantity >= 1) {
				state.cart[itemIndex].quantity += 1;
			}
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	removeAll,
	reduceProduct,
	incrementProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
