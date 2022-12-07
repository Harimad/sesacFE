import React, { useContext, useState } from 'react'
import { MyContext } from './Context'

const Floor1 = () => {
  const value = useContext(MyContext)
  const [items, setItems] = useState(value.state[0].floor1)

  return (
    <div className="floor1">
      <div>Floor1</div>
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

export default Floor1
