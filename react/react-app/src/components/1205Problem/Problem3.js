import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [renderCount, setRenderCount] = useState(0)

  useEffect(() => {
    setRenderCount(renderCount + 1)
    console.log('랜더링 완료')
  }, [count])

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>랜더링 횟수 : {renderCount}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default App
