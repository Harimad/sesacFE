import React, { useEffect, useRef } from 'react'

const App = () => {
  const inputRef = useRef()

  useEffect(() => {
    console.log(inputRef)

    inputRef.current.focus()
  }, [])
  return (
    <div>
      ID: <input type={'text'} ref={inputRef}></input>
    </div>
  )
}

export default App
