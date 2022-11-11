import { createSlice } from '@reduxjs/toolkit';
import { Statuses } from '../../constants/statuses';

const initialState = {
  entities: {},
  ids: [],
  bookDetails: {},
  status: Statuses.idle,
};
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = { ...action.payload.book }
      state.entities[book.id] = book;
    },
    removeBooks: (state) => {
      state.entities = {}
    },
    updateBookDetails: (state, action) => {
      state.bookDetails = { ...action.payload.bookDetails };
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
