import React, { useState } from 'react'
import { MyContext } from './Context'
import Floor1 from './Floor1'
import Floor2 from './Floor2'
import Floor3 from './Floor3'
import './App.css'

const App = () => {
  const [state, setState] = useState([
    { floor1: ['딸기', '바나나', '포도'] },
    { floor2: ['티셔츠', '바지', '치마'] },
    { floor3: ['축구공', '농구공', '야구공'] },
  ])
  return (
    <MyContext.Provider value={{ state, setState }}>
      <Floor3></Floor3>
      <Floor2></Floor2>
      <Floor1></Floor1>
    </MyContext.Provider>
  )
}

export default App
