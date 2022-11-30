import React from 'react'

const Wrapper = props => {
  console.log(props)
  const style = {
    border: '3px solid red',
    padding: '20px',
  }
  return <div style={style}>{props.children}</div>
}

export default Wrapper
