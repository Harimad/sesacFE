import React, { useState } from 'react'

const heavyWork = () => {
  for (let i = 0; i < 1000; i++) {
    console.log('엄청 복잡한 계산 중... 시간 오래 걸림..')
  }
  return ['하리', '매드']
}

const App = () => {
  const [names, setNames] = useState(() => heavyWork())

  // 생략

  return <div>App</div>
}

export default App
