import React, { useContext } from 'react'
import { MyContext } from './Context'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  const value = useContext(MyContext)
  return (
    <div>
      ParentComponent: {value}
      <ChildComponent></ChildComponent>
    </div>
  )
}

export default ParentComponent
