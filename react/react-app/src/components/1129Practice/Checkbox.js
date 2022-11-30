import React, { useState } from 'react'

const CheckBox = props => {
  const { cap, shoes, bag } = props
  console.log(cap, shoes, bag)
  const [total, setTotal] = useState(0)

  const changeHandler = checkbox => {
    if (checkbox.checked) {
      setTotal(total + parseInt(checkbox.value))
    } else {
      setTotal(total - parseInt(checkbox.value))
    }
  }

  return (
    <div>
      <p>-> {total}원</p>
      <input
        type="checkbox"
        value={cap}
        onChange={e => changeHandler(e.target)}
      ></input>
      <label>모자 1만원</label>
      <input
        type="checkbox"
        value={shoes}
        onChange={e => changeHandler(e.target)}
      ></input>
      <label>신발 3만원</label>
      <input
        type="checkbox"
        value={bag}
        onChange={e => changeHandler(e.target)}
      ></input>
      <label>가방 8만원</label>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <CheckBox cap={10000} shoes={30000} bag={80000}></CheckBox>
    </div>
  )
}

export default App
