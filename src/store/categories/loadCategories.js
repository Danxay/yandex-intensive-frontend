import { categoriesSlice } from './index';
import { prepareData } from '../utils';

export const loadCategories = (dispatch) => {
  dispatch(categoriesSlice.actions.startLoading());
  fetch('http://localhost:3001/api/categories', {})
    .then((response) => response.json())
    .then((categories) => {
      dispatch(categoriesSlice.actions.updateEntities(prepareData(categories)));
      dispatch(categoriesSlice.actions.successLoading());
    })
    .catch(() => {
      dispatch(categoriesSlice.actions.failLoading());
    });
}
