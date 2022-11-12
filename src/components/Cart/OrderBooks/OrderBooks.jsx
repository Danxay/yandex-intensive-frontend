import styles from './OrderBooks.module.css';
import { OrderBook } from './OrderBook/OrderBook';

export function OrderBooks({ books }) {
  return (
    <div className={styles.wrapper}>
      {books.map((b) => (
        <OrderBook book={b} key={b.id} />
      ))}
    </div>
  )
}
