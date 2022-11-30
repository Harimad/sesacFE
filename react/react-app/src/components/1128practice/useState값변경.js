import React, { useState } from 'react'

const App = () => {
  const [obj, setObj] = useState({ a: 1, b: 2, c: 3 })
  const [arr, setArr] = useState([10, 20, 30])

  const changeObj = () => {
    setObj({ ...obj, a: 2 }) // 바뀜
  }
  const changeArr = () => {
    let copy = [...arr]
    copy[1] = 21
    setArr(copy)
  }

  return (
    <div>
      <p>{obj.a}</p>
      <button onClick={changeObj}>ChangeObj</button>
      {arr.map(item => (
        <p key={item}>{item}</p>
      ))}
      <button onClick={changeArr}>ChangeArr</button>
    </div>
  )
}

export default App
