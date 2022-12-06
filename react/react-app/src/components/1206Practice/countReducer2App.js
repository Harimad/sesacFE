import React, { useReducer } from 'react'
import countReducer2 from './components/1206Practice/countReducer2'

const App = () => {
  const [state, dispatch] = useReducer(countReducer2, 0)

  function numUp() {
    dispatch({ type: 'INCREMENT', icon: '🔥' })
  }
  function numDown() {
    dispatch({ type: 'DECREMENT', icon: '🌱' })
  }

  return (
    <div>
      <p>{state}</p>
      <button onClick={numUp}>+1</button>
      <button onClick={numDown}>-1</button>
    </div>
  )
}

export default App
