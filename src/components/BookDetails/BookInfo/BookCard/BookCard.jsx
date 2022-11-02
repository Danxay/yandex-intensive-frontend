import { BookCardInfo } from '../../../common/BookCard/BookCardInfo/BookCardInfo';
import { BookCardCount } from '../../../common/BookCard/BookCardCount/BookCardCount';

import styles from './BookCard.module.css'

export function BookCard({ book }) {
  return (
    <article className={styles.wrapper}>
      <BookCardInfo
        title={book.title}
        author={book.author}
        genre={book.genre}
        rating={book.rating}
        price={book.price}
      />
      <BookCardCount />
    </article>
  )
}
