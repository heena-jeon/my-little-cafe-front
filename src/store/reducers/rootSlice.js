import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Home',
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducer: {
    getTitle: (state) => {
      return state.title;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  }
});

export const {
  getTitle,
  setTitle,
} = rootSlice.actions;

export default rootSlice.reducer;

