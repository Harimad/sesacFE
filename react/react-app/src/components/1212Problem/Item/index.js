import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Item = ({ data, id }) => {
  const navigate = useNavigate()
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.season}</td>
      <td>{data.color}</td>
      <td>{data.taste}</td>
      <td>{data.count}</td>
      <td>{data.price}</td>
      <td>
        {
          <button
            onClick={() => {
              navigate(id, { state: data })
            }}
          >
            상세정보
          </button>
        }
      </td>
    </tr>
  )
}

export default Item
