import React, { useRef } from 'react'

const App = () => {
  const ref = useRef('hello world')
  console.log('변경전 ref값', ref.current)

  ref.current = 'HELLO WORLD'
  console.log('변경후 ref값', ref.current)

  return <div>App</div>
}

export default App
