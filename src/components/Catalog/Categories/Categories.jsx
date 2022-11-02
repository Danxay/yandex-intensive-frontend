import { Category } from './Category/Category';

import styles from './Categories.module.css'

export function Categories({ categories, setActiveCategory, activeCategory }) {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {categories.map((c) => (
          <Category
            name={c.name}
            setActiveCategory={() => setActiveCategory(c)}
            active={activeCategory.id === c.id}
            key={c.id}
          />
        ))}
      </ul>
    </nav>
  )
}
