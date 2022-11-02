import { Rating } from '../../../common/Rating/Rating';

import styles from './Review.module.css';

export function Review({ name, text, rating }) {
  return (
    <article className={styles.item}>
      <header className={styles.header}>
        <address className="text_bold">{name}</address>
        <Rating rating={rating} />
      </header>
      <pre className="text_long">{text}</pre>
    </article>
  )
}
