import classnames from 'classnames';

import styles from './Category.module.css'

export function Category({ name, setActiveCategory, active }) {
  return (
    <li>
      <button onClick={setActiveCategory} className={classnames('text', styles.button, { [styles.active]: active })}>{name}</button>
    </li>
  )
}
