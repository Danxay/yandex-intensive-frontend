import Skeleton from 'react-loading-skeleton';

import styles from './OrderBooks.module.css';
import { OrderBook } from './OrderBook/OrderBook';

export function OrderBooks({ books }) {
  return (
    <div className={styles.wrapper}>
      {1 ? books.map((b) => (
        <OrderBook book={b} key={b.id} />
      )) : (
        <Skeleton
          className={styles.skeleton}
          count={3}
        />
      )}
    </div>
  )
}
