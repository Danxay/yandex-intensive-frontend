import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Category } from './Category/Category';
import styles from './Categories.module.css';
import 'react-loading-skeleton/dist/skeleton.css';

import {
  selectActiveCategoryId,
  selectCategories,
  selectStatus,
} from '../../../store/categories/selectors';
import { Statuses } from '../../../constants/statuses';
import { loadCategories } from '../../../store/categories/loadCinemas';
import { categoriesSlice } from '../../../store/categories';

export function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(loadCategories);
  }, []);

  const [searchParams] = useSearchParams();
  const сategoryId = searchParams.get('category') || categories[0]?.id

  useEffect(() => {
    console.log(2)
    dispatch(categoriesSlice.actions.setActiveCategoryId({ сategoryId }));
  }, [сategoryId]);

  const status = useSelector(selectStatus);
  const activeCategoryId = useSelector(selectActiveCategoryId);

  console.log(activeCategoryId)

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {status !== Statuses.inProgress ? categories.map((c) => (
          <Category
            id={c.id}
            name={c.name}
            key={c.id}
          />
        ))
          : (
            <Skeleton
              className={styles.skeleton}
              count={3}
            />
          )}
      </ul>
    </nav>
  )
}
