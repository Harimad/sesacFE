import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.color || 'white'};
  color: ${props => props.primary || 'palevioletred'};
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const App = () => {
  return (
    <div>
      <Button>Normal</Button>
      <Button color={'palevioletred'} primary={'white'}>
        Primary
      </Button>
    </div>
  )
}

export default App
