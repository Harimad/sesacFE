import React from 'react'

const Problem3 = () => {
  const isReact = true
  const isNotReact = false
  return (
    <div>
      <p>{isReact ? '리액트 입니다' : '리액트가 아닙니다.'}</p>
      <p>{isNotReact ? '리액트 입니다' : '리액트가 아닙니다.'}</p>
    </div>
  )
}

export default Problem3
