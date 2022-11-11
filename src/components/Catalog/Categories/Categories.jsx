import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

import { Category } from './Category/Category';

import styles from './Categories.module.css';
import 'react-loading-skeleton/dist/skeleton.css';

import {
  selectStatus,
} from '../../../store/categories/selectors';
import { Statuses } from '../../../constants/statuses';

export function Categories({ categories, activeCategoryId }) {
  const status = useSelector(selectStatus);
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {status === Statuses.success && categories.length ? categories.map((c) => (
          <Category
            id={c.id}
            name={c.name}
            isActive={activeCategoryId === c.id}
            key={c.id}
          />
        ))
          : (
            <Skeleton
              className={styles.skeleton}
              count={3}
            />
          )}
      </ul>
    </nav>
  )
}
