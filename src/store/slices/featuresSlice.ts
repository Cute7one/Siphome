import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FeaturesState {
  counter: number;
}

const initialState: FeaturesState = {
  counter: 0,
};

export const featuresSlice = createSlice({
  name: "features",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  featuresSlice.actions;

export default featuresSlice.reducer;
