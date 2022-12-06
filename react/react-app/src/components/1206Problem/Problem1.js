import React, { useReducer } from 'react'

const priceReducer = (state, action) => {
  switch (action.type) {
    case 'HAMBURGER':
      return state + 4000
    case 'POTATO':
      return state + 3000
    case 'COKE':
      return state + 1000
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(priceReducer, 0)

  const clickHamburger = () => {
    dispatch({ type: 'HAMBURGER' })
  }
  const clickPotato = () => {
    dispatch({ type: 'POTATO' })
  }
  const clickCoke = () => {
    dispatch({ type: 'COKE' })
  }
  return (
    <div>
      <h2>새도날드</h2>
      <h3>지불할 금액 : {state}</h3>
      <button onClick={clickHamburger}>🍔</button>
      <button onClick={clickPotato}>🍟</button>
      <button onClick={clickCoke}>🥤</button>
    </div>
  )
}

export default App
