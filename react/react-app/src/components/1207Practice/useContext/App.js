import React from 'react'
import { MyContext } from './components/1207Practice/useContext/context'
import ParentComponent from './components/1207Practice/useContext/ParentComponent'

const App = () => {
  return (
    <MyContext.Provider value="HELLO WORLD">
      <ParentComponent />
    </MyContext.Provider>
  )
}

export default App
