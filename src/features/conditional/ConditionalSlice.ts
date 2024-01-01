import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	modal: false,
	currencyModal: false,
	currency: "&#36;",
};

export const conditionalSlice = createSlice({
	name: "conditional",
	initialState,
	reducers: {
		toggleModal: (state, payload) => {
			state.modal = !state.modal;
		},
		toggleModalFalse: (state, payload) => {
			state.modal = false;
		},
		toggleCurrencyModal: (state, payload) => {
			state.currencyModal = !state.currencyModal;
		},
		toggleCurrencyModalFalse: (state) => {
			state.currencyModal = false;
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		setCurrency: (state, action: PayloadAction<any>) => {
			state.currency = action.payload.currency;
		},
	},
});

export const {
	toggleModal,
	toggleModalFalse,
	toggleCurrencyModal,
	toggleCurrencyModalFalse,
	setCurrency,
} = conditionalSlice.actions;

export default conditionalSlice.reducer;
