import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './Category.module.css'

export function Category({ id, name, isActive }) {
  return (
    <li>
      <Link to={`/catalog?category=${id}`} className={classnames('text', styles.button, { [styles.active]: isActive })}>{name}</Link>
    </li>
  )
}
