import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootSlice';
import coffeeReducer from './reducers/coffeeSlice';

export const store = configureStore({
  reducer: {
    rootReducer,
    coffeeReducer,
  }
});