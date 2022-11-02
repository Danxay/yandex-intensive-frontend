import { BookCard } from './BookCard/BookCard';

import styles from './BooksList.module.css';

export function BooksList({ books }) {
  return (
    <div className={styles.wrapper}>
      {books.map((b) => (
        <BookCard book={b} key={b.id} />
      ))}
    </div>
  )
}
