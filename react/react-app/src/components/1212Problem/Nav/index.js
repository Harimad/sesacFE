import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to="/" style={{ marginRight: '1rem' }}>
        Home
      </Link>
      <Link to="/products">Products</Link>
    </div>
  )
}

export default Nav
