import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Skeleton from 'react-loading-skeleton';
import { BookCard } from './BookCard/BookCard';

import styles from './BooksList.module.css';

import { selectBooks, selectStatus } from '../../../store/books/selectors';
import { loadBooksByCategory } from '../../../store/books/loadBooksByCategory';
import { Statuses } from '../../../constants/statuses';

export const BooksList = memo(({ activeCategoryId }) => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  useEffect(() => {
    dispatch(loadBooksByCategory(activeCategoryId));
  }, [activeCategoryId]);

  const status = useSelector(selectStatus);
  return (
    <div className={styles.wrapper}>
      {status === Statuses.success && books.length ? books.map((b) => (
        <BookCard book={b} key={b.id} />
      )) : (
        <Skeleton
          className={styles.skeleton}
          count={3}
        />
      )}
    </div>
  )
})
