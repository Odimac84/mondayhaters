import { configureStore } from "@reduxjs/toolkit";
import itemReducer from '../redux/item/itemSlice';

export const store = configureStore({
  reducer: {
    items: itemReducer,
  }
})