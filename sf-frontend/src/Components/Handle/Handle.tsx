import React, {FC} from 'react'
import styles from './Handle.module.css'

interface str {
    nameOfHandle: string
}

const Handle: FC<str> = (props): JSX.Element => {
  return (
    <div className={styles.button}>
      <button className={styles.container}>
        <div className={styles.text}>{props.nameOfHandle}</div>
      </button>
    </div>
  )
}

export default Handle;
