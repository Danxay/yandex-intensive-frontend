import { BookInfo } from '../../components/BookDetails/BookInfo/BookInfo';
import { Reviews } from '../../components/BookDetails/Reviews/Reviews';

import styles from './BookDetails.module.css';

export function BookDetails({ book }) {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <BookInfo book={book} />
        <Reviews reviews={book.reviews} />
      </div>
    </div>
  )
}
