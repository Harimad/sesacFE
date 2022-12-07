import React, { useContext } from 'react'
import { MyContext } from './Context'

const ChildComponent = () => {
  const value2 = useContext(MyContext)
  return <div>ChildComponent: {value2}</div>
}

export default ChildComponent
