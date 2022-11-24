import React from 'react'

const Introduce = ({ name, age, address, color, backgroundColor }) => {
  return (
    <div>
      <h1>
        안녕하세요. 제 이름은{' '}
        <span style={{ color: color[0], backgroundColor: backgroundColor[0] }}>
          {name}
        </span>
        입니다.
      </h1>
      <h1>
        저는{' '}
        <span style={{ color: color[1], backgroundColor: backgroundColor[1] }}>
          {age}
        </span>
        살이고,{' '}
        <span style={{ color: color[2], backgroundColor: backgroundColor[2] }}>
          {address}
        </span>
        에 살고 있습니다.
      </h1>
    </div>
  )
}

Introduce.defaultProps = {
  name: '이성현',
}

const Problem3 = () => {
  return (
    <div>
      {' '}
      <Introduce
        age={20}
        address={'서울'}
        large={'50px'}
        color={['blue', 'red', 'orange']}
        backgroundColor={['yellow', 'green', 'blue']}
      />
    </div>
  )
}

export default Problem3
