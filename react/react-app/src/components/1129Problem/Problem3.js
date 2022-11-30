import React, { useState } from 'react'

const Id = props => {
  return (
    <div>
      <label htmlFor="userId">PW : </label>
      <input
        type="text"
        id="userId"
        name="id"
        onChange={props.infoHandler}
      ></input>
    </div>
  )
}

const Pw = props => {
  return (
    <div>
      <label htmlFor="userPw">PW : </label>
      <input
        type="text"
        id="userPw"
        name="pw"
        onChange={props.infoHandler}
      ></input>
    </div>
  )
}

const App = () => {
  const [info, setInfo] = useState({ id: 'Lee', pw: '1234' })
  const [inputInfo, setInputInfo] = useState({ id: '', pw: '' })

  const infoHandler = e => {
    setInputInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const checkInfo = () => {
    let isTrue = true
    for (const key in inputInfo) {
      if (info[key] !== inputInfo[key]) {
        isTrue = false
      }
    }
    if (isTrue) {
      alert('로그인 성공')
    } else {
      alert('로그인 실패')
    }
  }

  return (
    <div>
      <Id infoHandler={infoHandler}></Id>
      <Pw infoHandler={infoHandler}></Pw>
      <button onClick={checkInfo}>Login</button>
    </div>
  )
}

export default App
