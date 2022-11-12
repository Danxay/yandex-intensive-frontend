import Skeleton from 'react-loading-skeleton';

import { useSelector } from 'react-redux';
import styles from './Order.module.css';
import { OrderItem } from './OrderItem/OrderItem';
import { selectCountByIds } from '../../../store/cart/selectors';

export function Order({ books }) {
  const booksIds = books.map((b) => b.id);
  const count = useSelector(selectCountByIds(booksIds))
  const booksWithCount = books.map((b, i) => ({ ...b, count: count[i] }))
  return (
    <div className={styles.wrapper}>
      <h1 className="text_bold">Ваш заказ: </h1>
      <div className={styles.orderItems}>
        {1 ? books.map((b) => <OrderItem title={b.title} price={b.price} key={b.id} />) : (
          <Skeleton
            className={styles.skeleton}
            count={3}
          />
        )}
      </div>
      <div className={styles.bottom}>
        <span className={styles.total}>
          Итого:
          {' '}
          {booksWithCount.reduce((acc, b) => acc + +b.price * +b.count, 0)}
          {' '}
          ₽
        </span>
        <button className={styles.buyBtn}>Купить</button>
      </div>
    </div>
  )
}
