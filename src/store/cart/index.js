import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state[action.payload] = (state[action.payload] || 0) + 1;
    },
    removeItem: (state, action) => {
      state[action.payload] = (state[action.payload] || 0) - 1;
      if (state[action.payload] <= 0) {
        delete state[action.payload];
      }
    },
  },
});
