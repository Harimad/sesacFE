import React from 'react'

const Introduce = ({ name, age, address }) => {
  return (
    <div>
      <h1>안녕하세요. 제 이름은 {name}입니다.</h1>
      <h1>
        저는 {age}살이고, {address}에 살고 있습니다.
      </h1>
    </div>
  )
}

Introduce.defaultProps = {
  name: '이성현',
}

const Problem1 = () => {
  return (
    <div>
      <Introduce age={20} address={'서울'} />
    </div>
  )
}

export default Problem1
