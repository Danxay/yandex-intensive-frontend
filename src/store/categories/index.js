import { createSlice } from '@reduxjs/toolkit';
import { Statuses } from '../../constants/statuses';

const initialState = {
  entities: {},
  ids: [],
  status: Statuses.idle,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategoryId: (state, action) => {
      state.activeCategoryId = action.payload.activeCategoryId
    },
    updateEntities: (state, action) => {
      state.entities = { ...action.payload.entities };
      state.ids = action.payload.ids;
    },
    startLoading: (state) => {
      state.status = Statuses.inProgress;
    },
    successLoading: (state) => {
      state.status = Statuses.success;
    },
    failLoading: (state) => {
      state.status = Statuses.failed;
    },
  },
});
