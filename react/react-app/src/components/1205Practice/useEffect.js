import React, { useEffect, useState } from 'react'

const App = () => {
  const [state, setState] = useState('harimad')

  useEffect(() => {
    console.log('렌더링이 완료되었습니다1' + state)
    return console.log('렌더링이 완료되었습니다2' + state)
  }, [state])

  const clickHandler = e => {
    setState('hi')
  }

  return <div onClick={clickHandler}>App</div>
}

export default App
