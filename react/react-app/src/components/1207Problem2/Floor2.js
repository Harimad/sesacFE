import React, { useContext, useState } from 'react'
import { MyContext } from './Context'

const Floor2 = () => {
  const value = useContext(MyContext)
  const [items, setItems] = useState(value.state[1].floor2)

  return (
    <div className="floor2">
      <div>Floor2</div>
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

export default Floor2
