import classnames from 'classnames';

import { Rating } from '../../Rating/Rating';

import styles from './BookCardInfo.module.css'

export function BookCardInfo({
  title, author, genre, rating, price,
}) {
  return (
    <div href="/src/pages" className={styles.wrapper}>
      <h1 className={classnames('text_bold', styles.title)}>{title}</h1>
      <address className="subtext">{author}</address>
      <p className="subtext">{genre}</p>
      <Rating rating={rating} />
      <span className={classnames('text_bold', styles.price)}>
        {price}
        {' '}
        ₽
      </span>
    </div>
  )
}
