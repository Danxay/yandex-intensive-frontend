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
        {booksWithCount.map(
          (b) => <OrderItem title={b.title} price={b.price} count={b.count} key={b.id} />,
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
