import React from 'react'
import './FirstSassComponent.scss'

const FirstSassComponent = () => {
  return (
    <div className="container">
      <div className="header">
        <p>안녕하세요</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>

      <div className="parent">
        <div className="parent-small">1</div>
        <div className="parent-medium">2</div>
        <div className="parent-large">3</div>
      </div>
    </div>
  )
}

export default FirstSassComponent
