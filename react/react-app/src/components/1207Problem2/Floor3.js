import React, { useContext, useState } from 'react'
import { MyContext } from './Context'

const Floor3 = () => {
  const value = useContext(MyContext)
  const [items, setItems] = useState(value.state[2].floor3)

  return (
    <div className="floor3">
      <div>Floor3</div>
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

export default Floor3
