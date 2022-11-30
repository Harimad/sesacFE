import React, { useState } from 'react'

const ChangeFont = () => {
  const [value, setValue] = useState('안녕하세요')
  const [font, setFont] = useState('50px')

  const fstyle = {
    fontSize: font,
  }

  const changeFont = size => {
    setFont(size)
  }

  return (
    <div>
      <div style={fstyle}>{value}</div>
      <button
        onClick={() => {
          changeFont('100px')
        }}
      >
        글자크기변경
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <ChangeFont></ChangeFont>
    </div>
  )
}

export default App
