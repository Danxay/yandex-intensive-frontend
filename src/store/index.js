import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from './categories';
import { booksSlice } from './books';
import { cartSlice } from './cart';

const reducer = combineReducers({
  categories: categoriesSlice.reducer,
  books: booksSlice.reducer,
  cart: cartSlice.reducer,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
