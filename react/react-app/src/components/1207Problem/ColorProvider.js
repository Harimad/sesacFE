import React, { useContext, useState } from 'react'
import ColorBox from './ColorBox'
import { MyContext } from './Context'

const ColorProvider = () => {
  // const askColor = prompt('원하는 색상을 입력하세요')
  const value = useContext(MyContext)
  const [state, setState] = useState('')

  const clickHandler = e => {
    setState(prompt('원하는 색상을 입력하세요'))
  }
  return (
    <div style={{ background: value.color }}>
      <button onClick={clickHandler}>색변경</button>
      <ColorBox color={state} />
    </div>
  )
}

export default ColorProvider
