import { useState } from 'react';

import { Categories } from '../../components/Catalog/Categories/Categories';
import { BooksList } from '../../components/Catalog/BooksList/BooksList';

import styles from './Catalog.module.css';

export function Catalog({ categories }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Categories
          categories={categories}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <BooksList books={activeCategory.books} />
      </div>
    </div>
  )
}
