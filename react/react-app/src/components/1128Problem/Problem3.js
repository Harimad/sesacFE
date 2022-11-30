import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('글자색 바꾸기')
  const [color, setColor] = useState({ color: 'black' })

  const colorHandler1 = () => {
    setColor({ color: 'red' })
  }
  const colorHandler2 = () => {
    setColor({ color: 'green' })
  }
  const colorHandler3 = () => {
    setColor({ color: 'blue' })
  }

  return (
    <div>
      <h1 style={color}>{text}</h1>
      <button onClick={colorHandler1}>Red</button>
      <button onClick={colorHandler2}>Green</button>
      <button onClick={colorHandler3}>Blue</button>
    </div>
  )
}

export default App
