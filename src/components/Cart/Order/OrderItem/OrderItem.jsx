import classnames from 'classnames';
import styles from './OrderItem.module.css';

export function OrderItem({ title, price, count }) {
  return (
    <div className={styles.wrapper}>
      <p className="text">
        {title}
      </p>
      <span className={classnames('text_bold', styles.price)}>
        {+price * +count}
        {' '}
        ₽
      </span>
    </div>
  )
}
