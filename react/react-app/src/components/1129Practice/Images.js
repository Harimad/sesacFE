import React from 'react'

const App = () => {
  return (
    <div>
      <h1>이미지 추가하기</h1>
      <img
        src={`http://placekitten.com/200/200`}
        width="150px"
        height="150px"
        alt="파일없음"
      ></img>
    </div>
  )
}

export default App
