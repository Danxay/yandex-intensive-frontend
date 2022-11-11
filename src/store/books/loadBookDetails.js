import { booksSlice } from './index';

export const loadBookDetails = (bookId) => (dispatch) => {
  dispatch(booksSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/books/${bookId}`, {})
    .then((response) => response.json())
    .then((bookDetails) => {
      dispatch(booksSlice.actions.updateBookDetails({ bookDetails }));
      dispatch(booksSlice.actions.successLoading());
    })
    .catch(() => {
      dispatch(booksSlice.actions.failLoading());
    });
}
