import React, { useState } from 'react'

const CheckBox = props => {
  const { cap, shoes, bag } = props
  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([
    { value: cap, text: '모자 1만원' },
    { value: shoes, text: '신발 3만원' },
    { value: bag, text: '가방 8만원' },
  ])

  const changeHandler = checkbox => {
    if (checkbox.checked) {
      setTotal(total => total + parseInt(checkbox.value))
    } else {
      setTotal(total => total - parseInt(checkbox.value))
    }
  }

  return (
    <div>
      <p>{total}원</p>
      {items.map((item, idx) => (
        <div key={`${item}${idx}`}>
          <input
            type="checkbox"
            value={item.value}
            onChange={e => changeHandler(e.target)}
            id={`chk${idx}`}
          ></input>
          <label htmlFor={`chk${idx}`}>{item.text}</label>
        </div>
      ))}
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
