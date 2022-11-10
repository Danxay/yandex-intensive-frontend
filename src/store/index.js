import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from './categories';

const reducer = combineReducers({
  categories: categoriesSlice.reducer,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
