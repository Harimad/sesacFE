import React, { createContext, useContext } from 'react'
// useContext 전반적인 그림 (이 파일은 실행되진 않음.)

const App = () => {
  const MyContext = createContext()
  return (
    <MyContext.Provier value="Hello World">
      <GrandParent />
    </MyContext.Provier>
  )
}

function GrandParent() {
  return <Parent />
}

function Parent() {
  return <Child />
}

function Child() {
  return <Message />
}

function Message() {
  const value = useContext(MyContext)
  return <div>전달받은 데이터 : {value}</div>
}

export default App
