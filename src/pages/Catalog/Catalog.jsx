import { Categories } from '../../components/Catalog/Categories/Categories';
import { BooksList } from '../../components/Catalog/BooksList/BooksList';

import styles from './Catalog.module.css';

export function Catalog() {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Categories />
        <BooksList />
      </div>
    </div>
  )
}
