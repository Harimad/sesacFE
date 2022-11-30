import React, { useState } from 'react'

const App = () => {
  const [message, setMessage] = useState('onChange Event')

  const printConsole = e => {
    console.log(e.target.value)
  }

  const onChange = e => {
    setMessage(e.target.value)
  }

  return (
    <div>
      <h1>{message}</h1>
      <input
        type="text"
        name="msg1"
        placeholder="내용을 입력하세요"
        onChange={printConsole}
      ></input>
      <input
        type="text"
        name="msg1"
        placeholder="내용을 입력하세요"
        onChange={onChange}
      ></input>
    </div>
  )
}

export default App
