import React, { useState } from 'react'

const App = () => {
  const [state, setState] = useState(['초콜렛', '사탕'])
  const [value, setValue] = useState('')

  const inputHandler = e => {
    setValue(e.target.value)
  }

  const clickHandler = e => {
    setState(prev => [value, ...prev])
  }

  return (
    <div>
      <input type={'text'} onChange={inputHandler}></input>
      <button onClick={clickHandler}>추가</button>
      <ul>
        {state.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
