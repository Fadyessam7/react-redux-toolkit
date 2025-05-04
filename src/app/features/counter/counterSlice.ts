import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  value: number;
  text: string;
}

const initialState: counterState = {
  value: 0,
  text: "Increase Counter",
};

export const counterSlice = createSlice({
  name: "counter", //** Attached with store
  initialState,
  reducers: {
    increaseAction: (state, actionPayload: PayloadAction<number>) => {
      state.value += actionPayload.payload;
    },
  },
});
export const { increaseAction } = counterSlice.actions;
export default counterSlice.reducer;
