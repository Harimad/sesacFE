import React from 'react'

const MovieComponent = props => {
  return (
    <div>
      <img src={props.img} alt="img"></img>
      <h3>{props.title}</h3>
      <h3>{props.open}</h3>
      <hr></hr>
    </div>
  )
}

export default MovieComponent
