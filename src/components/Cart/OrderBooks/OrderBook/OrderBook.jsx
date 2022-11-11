import { Link } from 'react-router-dom';
import styles from './OrderBook.module.css';
import { BookCardInfo } from '../../../common/BookCard/BookCardInfo/BookCardInfo';
import { BookCardCount } from '../../../common/BookCard/BookCardCount/BookCardCount';

export function OrderBook({ book }) {
  return (
    <article className={styles.item}>
      <Link to={`/catalog/${book.id}`}>
        <BookCardInfo
          title={book.title}
          author={book.author}
          genre={book.genre}
          rating={book.rating}
          price={book.price}
        />
      </Link>
      <BookCardCount bookId={book.id} />
    </article>
  )
}
