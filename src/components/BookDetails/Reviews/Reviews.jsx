import { Review } from './Review/Review';

import styles from './Reviews.module.css';

export function Reviews({ reviews }) {
  return (
    <div className={styles.wrapper}>
      {reviews.map((r) => (
        <Review name={r.name} text={r.text} rating={r.rating} key={r.id} />
      ))}
    </div>
  )
}
