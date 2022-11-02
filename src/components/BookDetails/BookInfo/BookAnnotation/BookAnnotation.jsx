import React from 'react';

import styles from './BookAnnotation.module.css'

export function BookAnnotation({ annotation }) {
  return (
    <article className={styles.wrapper}>
      <h1 className="text_bold">Аннотация</h1>
      <pre className="text_long">{annotation}</pre>
    </article>
  )
}
