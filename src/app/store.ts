import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/CartSlice";
import conditionalReducer from "../features/conditional/ConditionalSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		conditional: conditionalReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
