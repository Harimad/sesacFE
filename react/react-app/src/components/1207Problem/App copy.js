import React, { useState } from 'react'
import ColorProvider from './components/1207Problem/ColorProvider'
import { MyContext } from './components/1207Problem/Context'

const App = () => {
  const [color, setColor] = useState('green')
  return (
    <MyContext.Provider value={{ color, setColor }}>
      <ColorProvider />
    </MyContext.Provider>
  )
}

export default App
