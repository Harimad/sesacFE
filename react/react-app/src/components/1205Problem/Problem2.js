import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const countHandler = e => {
    console.log('count 값이 변경되었습니다.')
    setCount(count + 1)
  }

  const inputHandler = e => {
    console.log('text 값이 변경되었습니다.')
    setText(e.target.value)
  }

  useEffect(() => {
    console.log('렌더링이 완료되었습니다.')
  }, [])

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={countHandler}>+1</button>
      <hr></hr>
      <input type={'text'} onChange={inputHandler}></input>
      <h3>{text}</h3>
    </div>
  )
}

export default App
