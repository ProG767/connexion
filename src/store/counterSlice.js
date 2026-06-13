import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementBy10: (state) => {
      state.value += 10;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    decrementBy10: (state) => {
      state.value -= 10;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
