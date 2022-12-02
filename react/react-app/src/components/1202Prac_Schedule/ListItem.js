import React from 'react'
import './ListItem.scss'

const ListItem = ({ item }) => {
  return (
    <tr>
      <td>{item.schedule}</td>
      <td>{item.userInput}</td>
      <td>{item.category}</td>
      <td>{item.amount}</td>
    </tr>
  )
}

export default ListItem
