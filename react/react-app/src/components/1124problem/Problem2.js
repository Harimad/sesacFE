import React from 'react'

const Problem2 = () => {
  // 2-1
  var a = 'hello'
  if (true) {
    var a = 'bye'
  }

  // 2-2
  let b = 'hello'

  if (true) {
    let b = 'bye'
  }
  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>
    </div>
  )
}

export default Problem2
