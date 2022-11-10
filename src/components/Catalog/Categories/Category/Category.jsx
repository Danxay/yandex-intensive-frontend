import classnames from 'classnames';

import styles from './Category.module.css'

export function Category({ name }) {
  return (
    <li>
      <button onClick={() => console.log(1)} className={classnames('text', styles.button, { [styles.active]: 13 })}>{name}</button>
    </li>
  )
}
