import React, { useState } from 'react'

const App = () => {
  const [names, setNames] = useState(['1', '2'])
  const [input, setInput] = useState('')

  const inputChange = e => {
    setInput(e.target.value)
  }
  const uploadInput = () => {
    // setNames([input])
    setNames(prev => [...prev, input])
  }

  return (
    <div>
      <input type={'text'} onChange={inputChange}></input>
      <button onClick={uploadInput}>추가</button>
      <div>
        {names.map((name, idx) => (
          <p key={idx}>{name}</p>
        ))}
      </div>
    </div>
  )
}

export default App
