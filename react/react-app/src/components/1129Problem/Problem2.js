import React, { useState } from 'react'

const App = () => {
  const [message, setMessage] = useState({ title: '제목', color: 'red' })

  const inputHandler = e => {
    let copy = { ...message, title: e.target.value }
    setMessage(copy)
  }

  const clickHandler = e => {
    alert(message.title)
  }

  return (
    <div>
      <h1 style={message.title !== '제목' ? { color: message.color } : null}>
        {message.title}
      </h1>
      <hr></hr>
      <input
        type="text"
        placeholder="내용을 입력하세요"
        onChange={inputHandler}
      ></input>
      <button onClick={clickHandler}>클릭</button>
    </div>
  )
}

export default App
