import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";

interface counterState {
  cartItems: IProduct[];
}

const initialState: counterState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCartAction: (state, actionPayload: PayloadAction<IProduct>) => {
      state.cartItems = [...state.cartItems, actionPayload.payload];
    },
  },
});

export const { addItemToCartAction } = cartSlice.actions;
export default cartSlice.reducer;
