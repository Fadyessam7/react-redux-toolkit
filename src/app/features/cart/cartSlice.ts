import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import { addItemToShoppingCart } from "../../../utils/functions";
import { RootState } from "../../store";

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
      state.cartItems = addItemToShoppingCart(
        state.cartItems,
        actionPayload.payload
      );
    },
  },
});

export const { addItemToCartAction } = cartSlice.actions;
export const cartSelector = ({ cart }: RootState) => cart;
export default cartSlice.reducer;
