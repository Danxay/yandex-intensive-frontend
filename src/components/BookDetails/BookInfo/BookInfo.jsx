import { BookCard } from './BookCard/BookCard';
import { BookAnnotation } from './BookAnnotation/BookAnnotation';

import styles from './BookInfo.module.css';

export function BookInfo({ book }) {
  return (
    <div className={styles.wrapper}>
      <BookCard book={book} />
      <BookAnnotation annotation={book.annotation} />
    </div>
  )
}
