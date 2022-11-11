import { booksSlice } from '../books';
import { selectOrderBooksIds } from './selectors';
import { loadBookById } from '../books/loadBookById';

export const loadOrderBooks = (dispatch, getState) => {
  dispatch(booksSlice.actions.removeBooks())
  const items = selectOrderBooksIds(getState());
  items.forEach((i) => dispatch(loadBookById(i)));
}
