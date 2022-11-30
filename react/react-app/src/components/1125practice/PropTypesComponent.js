import React from 'react'
import PropTypes from 'prop-types'

const PropTypesComponent = ({ name, age }) => {
  return (
    <div>
      My name is : {name} & {age} years old
    </div>
  )
}

PropTypesComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

export default PropTypesComponent
