import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Categories } from '../../components/Catalog/Categories/Categories';
import { BooksList } from '../../components/Catalog/BooksList/BooksList';

import styles from './Catalog.module.css';

import {
  selectCategories,
} from '../../store/categories/selectors';
import { loadCategories } from '../../store/categories/loadCategories';

export function Catalog() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(loadCategories);
  }, []);

  const [searchParams] = useSearchParams();
  const activeCategoryId = searchParams.get('category') || categories[0]?.id;

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Categories categories={categories} activeCategoryId={activeCategoryId} />
        {activeCategoryId && (
          <BooksList activeCategoryId={activeCategoryId} />
        )}
      </div>
    </div>
  )
}
