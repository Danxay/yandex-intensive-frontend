import { useState } from 'react';

import styles from './BookCardCount.module.css';

export function BookCardCount() {
  const [count, setCount] = useState(0);

  return (
    <form className={styles.wrapper}>
      <button name="increase" type="button" className={styles.button} onClick={() => setCount(count - 1)} disabled={count === 0}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.25 12.5H3.75C3.55109 12.5 3.36032 12.421 3.21967 12.2803C3.07902 12.1397 3 11.9489 3 11.75C3 11.5511 3.07902 11.3603 3.21967 11.2197C3.36032 11.079 3.55109 11 3.75 11H20.25C20.4489 11 20.6397 11.079 20.7803 11.2197C20.921 11.3603 21 11.5511 21 11.75C21 11.9489 20.921 12.1397 20.7803 12.2803C20.6397 12.421 20.4489 12.5 20.25 12.5Z" fill="white" />
        </svg>
      </button>
      <output htmlFor="increase add" className={styles.number}>{count}</output>
      <button name="add" type="button" className={styles.button} onClick={() => setCount(count + 1)}>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.25 16.25H17.75V8.75C17.75 8.55109 17.671 8.36032 17.5303 8.21967C17.3897 8.07902 17.1989 8 17 8C16.8011 8 16.6103 8.07902 16.4697 8.21967C16.329 8.36032 16.25 8.55109 16.25 8.75V16.25H8.75C8.55109 16.25 8.36032 16.329 8.21967 16.4697C8.07902 16.6103 8 16.8011 8 17C8 17.1989 8.07902 17.3897 8.21967 17.5303C8.36032 17.671 8.55109 17.75 8.75 17.75H16.25V25.25C16.25 25.4489 16.329 25.6397 16.4697 25.7803C16.6103 25.921 16.8011 26 17 26C17.1989 26 17.3897 25.921 17.5303 25.7803C17.671 25.6397 17.75 25.4489 17.75 25.25V17.75H25.25C25.4489 17.75 25.6397 17.671 25.7803 17.5303C25.921 17.3897 26 17.1989 26 17C26 16.8011 25.921 16.6103 25.7803 16.4697C25.6397 16.329 25.4489 16.25 25.25 16.25Z" fill="white" />
        </svg>
      </button>
    </form>
  )
}
