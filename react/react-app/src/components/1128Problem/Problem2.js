import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('안녕하세요')

  const logInHandler = () => {
    setText('로그인 되었습니다.')
  }

  const logOutHandler = () => {
    setText('로그아웃 되었습니다.')
  }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={logInHandler}>Log in</button>
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  )
}

export default App
