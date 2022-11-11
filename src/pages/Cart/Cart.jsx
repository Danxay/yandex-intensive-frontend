import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Cart.module.css';
import { Order } from '../../components/Cart/Order/Order';
import { loadOrderBooks } from '../../store/cart/loadOrderBooks';
import { selectBooks } from '../../store/books/selectors';
import { OrderBooks } from '../../components/Cart/OrderBooks/OrderBooks';

export function Cart() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks)

  useEffect(() => {
    dispatch(loadOrderBooks)
  }, [])

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Order books={books} />
        <OrderBooks books={books} />
      </div>
    </div>
  )
}
