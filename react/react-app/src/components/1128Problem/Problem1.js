import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const countHandler = () => {
    setCount(count => ++count)
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={countHandler}>Click</button>
    </div>
  )
}

export default App
