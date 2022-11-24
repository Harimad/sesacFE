import React from 'react'

const Introduce = ({ name, age, address }) => {
  return (
    <div>
      <h1>
        안녕하세요. 제 이름은 <span style={{ color: 'blue' }}>{name}</span>
        입니다.
      </h1>
      <h1>
        저는 <span style={{ color: 'red' }}>{age}</span>살이고,{' '}
        <span style={{ color: 'orange' }}>{address}</span>에 살고 있습니다.
      </h1>
    </div>
  )
}
Introduce.defaultProps = {
  name: '이성현',
}

const Problem2 = () => {
  return (
    <div>
      {' '}
      <Introduce age={20} address={'서울'} />
    </div>
  )
}

export default Problem2
