import React, { useReducer, useState } from 'react'

const accountReducer = (state, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return state + Number(action.money)
    case 'WITHDRAW':
      return state - Number(action.money)
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(accountReducer, 0)
  const [money, setMoney] = useState(0)

  const clickDeposit = () => {
    dispatch({ type: 'DEPOSIT', money: money })
  }
  const clickWithdraw = () => {
    dispatch({ type: 'WITHDRAW', money: money })
  }
  return (
    <div>
      <h2>금액을 입력하세요.</h2>
      <input
        type="number"
        step={1000}
        onChange={e => setMoney(e.target.value)}
      ></input>
      <h2>입금 또는 출금 버튼을 클릭하세요</h2>
      <button onClick={clickDeposit}>입금</button>
      <button onClick={clickWithdraw}>출금</button>
      <h2>현재 잔액: {state}</h2>
    </div>
  )
}

export default App
