import styled from 'styled-components'

export const StyledBox = styled.div`
  border: 10px solid aqua;
  background: ${props => props.color || 'green'};
`
