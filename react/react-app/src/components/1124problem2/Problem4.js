import React from 'react'

const ChildComponent = ({ children }) => {
  return (
    <div>
      <h1>child 값은 {children}입니다.</h1>
    </div>
  )
}

const Problem4 = () => {
  return (
    <div>
      <ChildComponent>리액트</ChildComponent>
    </div>
  )
}

export default Problem4
