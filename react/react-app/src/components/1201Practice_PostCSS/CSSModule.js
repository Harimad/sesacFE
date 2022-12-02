import React from 'react'
import styles from './CSSModule.module.scss'

const CSSModule = () => {
  console.log(styles)

  return (
    <div className={styles.container}>
      <span className={styles.span}>CSSModule</span>실습1
      <br></br>
      <span className="span">CSSModule</span>실습2
    </div>
  )
}

export default CSSModule
