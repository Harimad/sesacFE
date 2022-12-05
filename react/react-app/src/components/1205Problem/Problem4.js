import React, { useRef, useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  const textRef = useRef('')

  const inputHandler = e => {
    textRef.current = e.target.value
    // console.log(textRef.current)
  }
  const clickHandler = e => {
    setText(textRef.current)
  }
  return (
    <div>
      <input type={'text'} onChange={inputHandler}></input>
      <button onClick={clickHandler}>전송</button>
      <h3>전송된 단어 : {text}</h3>
    </div>
  )
}

export default App
