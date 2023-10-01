import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Myslider';

export const Mystore = configureStore({
  reducer: {
    counter: counterSlice
  },
})