import React, { useContext } from 'react'
import { MyContext } from './Context'

const ColorBox = props => {
  const { color } = props
  const { setColor } = useContext(MyContext)
  setColor(color)

  return <div style={{ background: color }}>ColorBox</div>
}

export default ColorBox
