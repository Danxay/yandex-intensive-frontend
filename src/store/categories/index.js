import { createSlice } from '@reduxjs/toolkit';
import { Statuses } from '../../constants/statuses';

const initialState = {
  entities: {},
  activeCategoryId: null,
  status: Statuses.idle,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategoryId: (state, action) => {
      state.activeCategoryId = action.payload.activeCategoryId
    },
    startLoading: (state) => {
      state.status = Statuses.inProgress;
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.entities = { ...state.entities, ...action.payload.entities };

      const [firstId] = Object.keys(action.payload.entities)
      state.activeCategoryId = firstId;
    },
    failLoading: (state) => {
      state.status = Statuses.failed;
    },
  },
});
