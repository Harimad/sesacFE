import React, { useMemo, useState } from 'react'
import ColorProvider from './components/1207Problem/ColorProvider'
import { MyContext } from './components/1207Problem/Context'

const App = () => {
  const [color, setColor] = useState('green')

  const value = useMemo(() => ({ color, setColor }), [color, setColor])

  return (
    <MyContext.Provider value={value}>
      <ColorProvider />
    </MyContext.Provider>
  )
}

export default App
