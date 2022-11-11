import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import { BookInfo } from '../../components/BookDetails/BookInfo/BookInfo';
import { Reviews } from '../../components/BookDetails/Reviews/Reviews';

import styles from './BookDetails.module.css';

import { selectBookDetails, selectStatus } from '../../store/books/selectors';
import { loadBookDetails } from '../../store/books/loadBookDetails';
import { Statuses } from '../../constants/statuses';

export function BookDetails() {
  const { bookId } = useParams();

  const dispatch = useDispatch();
  const bookDetails = useSelector(selectBookDetails);

  useEffect(() => {
    dispatch(loadBookDetails(bookId));
  }, []);

  const status = useSelector(selectStatus);

  return (
    <div className="container">
      <div className={styles.wrapper}>
        {status === Statuses.success && bookDetails?.id ? (
          <>
            <BookInfo book={bookDetails} />
            <Reviews reviews={bookDetails.reviews} />
          </>
        ) : (
          <Skeleton
            className={styles.skeleton}
            count={3}
          />
        )}
      </div>
    </div>
  )
}
