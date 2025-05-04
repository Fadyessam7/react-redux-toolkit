import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
});
// export const { increaseAction } = counterSlice.actions;
export default cartSlice.reducer;
