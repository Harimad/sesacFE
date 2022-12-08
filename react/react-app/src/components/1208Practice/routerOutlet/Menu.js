import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/product">Product</Link>
      </p>
    </div>
  )
}

export default Menu
