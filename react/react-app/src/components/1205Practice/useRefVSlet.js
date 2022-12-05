import React, { useRef, useState } from 'react'

const App = () => {
  const [refresh, setRefresh] = useState(0)
  const countRef = useRef(0)
  let currentVar = 0

  function refreshHandler() {
    setRefresh(refresh + 1)
  }
  function addRefHandler() {
    countRef.current = countRef.current + 1
    console.log('ref : ', countRef.current)
  }
  function addVarHandler() {
    currentVar = currentVar + 1
    console.log('var : ', currentVar)
  }

  return (
    <div>
      <h3>state : {refresh}</h3>
      <h3>ref : {countRef.current}</h3>
      <h3>let : {currentVar}</h3>
      <button onClick={refreshHandler}>State</button>
      <button onClick={addRefHandler}>Ref</button>
      <button onClick={addVarHandler}>Let</button>
    </div>
  )
}

export default App
