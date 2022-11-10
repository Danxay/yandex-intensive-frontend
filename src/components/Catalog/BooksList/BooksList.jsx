import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
// import { BookCard } from './BookCard/BookCard';

import styles from './BooksList.module.css';

export function BooksList() {
  const [searchParams] = useSearchParams();
  const activeCategoryId = searchParams.get('category')

  useEffect(() => {
    console.log(13)
  }, [activeCategoryId])

  return (
    <div className={styles.wrapper}>
      {/* {books.map((b) => ( */}
      {/*   <BookCard book={b} key={b.id} /> */}
      {/* ))} */}
    </div>
  )
}
