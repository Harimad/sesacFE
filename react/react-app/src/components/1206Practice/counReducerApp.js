import React, { useReducer } from 'react'
import countReducer from './components/1206Practice/countReducer'

const App = () => {
  const [state, dispatch] = useReducer(countReducer, 0)

  const numUp = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const numDown = () => {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state}</b>입니다.
      </p>
      <button onClick={numUp}>+1</button>
      <button onClick={numDown}>-1</button>
    </div>
  )
}

export default App
