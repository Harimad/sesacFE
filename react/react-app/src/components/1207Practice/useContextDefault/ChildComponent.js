import React, { useContext } from 'react'
import { MyContext } from './Context'

const ChildComponent = () => {
  const value = useContext(MyContext)
  return <div>ChildComponent: {value}</div>
}

export default ChildComponent
