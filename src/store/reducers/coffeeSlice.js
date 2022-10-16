import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducer: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  }
});

export const {
  increment,
  decrement,
  incrementByAmount,
} = coffeeSlice.actions;

export default coffeeSlice.reducer;