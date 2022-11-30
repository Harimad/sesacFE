import React, { useState } from 'react'

const ChangePropsValue = props => {
  let { name, setName } = props

  const changeNameHandler = () => {
    setName('React')
  }
  const printConsoleHandler = () => {
    console.log(name)
  }

  return (
    <div>
      <p>{name}</p>
      <button onClick={changeNameHandler}>Click</button>
      <button onClick={printConsoleHandler}>Print Click</button>
    </div>
  )
}

const App = () => {
  const [name, setName] = useState('HTML')
  const [font, setFont] = useState('50px')

  const fstyle = { fontSize: font }

  return (
    <div>
      <div style={fstyle}>
        <ChangePropsValue name={name} setName={setName}></ChangePropsValue>
      </div>
    </div>
  )
}

export default App
