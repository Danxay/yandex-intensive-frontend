import { booksSlice } from './index';

export const loadBookById = (bookId) => (dispatch) => {
  dispatch(booksSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/books/${bookId}`, {})
    .then((response) => response.json())
    .then((book) => {
      dispatch(booksSlice.actions.addBook({ book }));
      dispatch(booksSlice.actions.successLoading());
    })
    .catch(() => {
      dispatch(booksSlice.actions.failLoading());
    });
}
