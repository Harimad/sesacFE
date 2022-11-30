import React, { useState, useEffect } from 'react'

const Child = props => {
  return (
    <div>
      <input onChange={e => props.addData(e.target.value)}></input>
    </div>
  )
}

const App = () => {
  const [data, setData] = useState('')

  const changeDataHandler = value => {
    setData(value)
  }

  // useEffect(() => {
  //   console.log('Render!')
  //   return () => {}
  // }, [data])

  return (
    <div>
      <p>Data : {data}</p>
      <Child addData={changeDataHandler}></Child>
    </div>
  )
}

export default App
