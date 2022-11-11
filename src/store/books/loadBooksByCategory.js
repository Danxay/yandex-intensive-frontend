import { booksSlice } from './index';
import { prepareData } from '../utils';

export const loadBooksByCategory = (categoryId) => (dispatch) => {
  dispatch(booksSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/books?categoryId=${categoryId}`, {})
    .then((response) => response.json())
    .then((books) => {
      dispatch(booksSlice.actions.updateEntities(prepareData(books)));
      dispatch(booksSlice.actions.successLoading());
    })
    .catch(() => {
      dispatch(booksSlice.actions.failLoading());
    });
}
