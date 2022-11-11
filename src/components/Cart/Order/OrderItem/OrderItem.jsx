import styles from './OrderItem.module.css';

export function OrderItem({ title, price }) {
  return (
    <div className={styles.wrapper}>
      <p className="text">
        {title}
      </p>
      <span className="text_bold">
        {price}
        {' '}
        ₽
      </span>
    </div>
  )
}
