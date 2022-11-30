import React, { useState } from 'react'

const App = () => {
  const [form, setForm] = useState({ username: '', message: '' })

  const onChange = e => {
    const nextForm = { ...form, [e.target.name]: e.target.value }
    setForm(nextForm)
  }

  return (
    <div>
      <h1>사용자 이름: {form.username}</h1>
      <h1>내용 : {form.message}</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="내용을 입력하세요"
        onChange={onChange}
      ></input>
    </div>
  )
}

export default App
