import React from 'react'

const App = () => {
  return <GrandParent value="Hello World" />
}

function GrandParent({ value }) {
  return <Parent value={value} />
}

function Parent({ value }) {
  return <Child value={value} />
}

function Child({ value }) {
  return <Message value={value} />
}

function Message({ value }) {
  return <div>전달받은 데이터 : {value}</div>
}

export default App
