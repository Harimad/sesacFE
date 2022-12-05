import React, { useRef, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  const addStateHandler = () => {
    console.log('State 변경')
    setCount(count + 1)
  }

  const addRefHandler = () => {
    countRef.current = countRef.current + 1
    console.log(countRef.current)
  }

  return (
    <div>
      <h3>State 값: {count}</h3>
      <h3>Ref 값: {countRef.current}</h3>
      <button onClick={addStateHandler}>State</button>
      <button onClick={addRefHandler}>Ref</button>
    </div>
  )
}

export default App
