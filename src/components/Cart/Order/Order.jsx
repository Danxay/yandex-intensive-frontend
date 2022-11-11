import Skeleton from 'react-loading-skeleton';

import styles from './Order.module.css';
import { OrderItem } from './OrderItem/OrderItem';

export function Order({ books }) {
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
          {books.reduce((acc, value) => acc + +value.price, 0)}
          {' '}
          ₽
        </span>
        <button className={styles.buyBtn}>Купить</button>
      </div>
    </div>
  )
}
