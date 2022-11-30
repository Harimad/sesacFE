import React, { useState } from 'react'

const App = () => {
  const [form, setForm] = useState('')

  const updateValue = e => {
    setForm(e.target.value)
  }

  const submitHandler = e => {
    console.log('submit으로 받은 데이터 : ', form)
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={updateValue}></input>
        <input type="submit" value="전송"></input>
      </form>
    </div>
  )
}

export default App
