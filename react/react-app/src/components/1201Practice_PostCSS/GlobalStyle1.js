import React from 'react'
import styles from './GlobalStyle1.module.scss'

const GlobalStyle1 = () => {
  return (
    <div>
      <div className={`${styles.container} ${styles.test} `}>
        <h1 className>컴포넌트1(PoseCSS)</h1>
        <button className={styles.globalBtn}>버튼(PostCSS)</button>
        <button className="globalBtn">버튼(전역스타일)</button>
      </div>
    </div>
  )
}

export default GlobalStyle1
