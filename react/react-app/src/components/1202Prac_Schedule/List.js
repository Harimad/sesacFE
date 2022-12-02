import React, { useState, useEffect, useRef } from 'react'
import Table from 'react-bootstrap/Table'
import './List.scss'
import ListItem from './ListItem'
import NoContents from './NoContents'
import MonthForm from './MonthForm'

const List = props => {
  const [copyState, setCopyState] = useState([...props.state])
  const [renderedItems, setRenderedItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const monthTag = useRef()

  const renderItems = obj => {
    return obj.map(item => <ListItem key={props.uid()} item={item}></ListItem>)
  }

  const totalAmount = arr => {
    let totalAmount = arr.map(item => Number(item.amount))
    return totalAmount.reduce((prev, curr) => prev + curr)
  }
  console.log(totalAmount(copyState))

  useEffect(() => {
    setCopyState([...props.state])
    setRenderedItems(renderItems(props.state))
    setTotalPrice(totalAmount(copyState))
    monthTag.current.value = 'all'
  }, [props.state])

  const onFilterHandler = e => {
    let filterMonth = e.target.value

    if (filterMonth === 'all') {
      setRenderedItems(renderItems(props.state))
      setTotalPrice(totalAmount(props.state))
    } else {
      let filteredItems = copyState.filter(item => {
        return new Date(item.schedule).getMonth() === Number(filterMonth)
      })
      setRenderedItems(renderItems(filteredItems))

      if (!filteredItems.length) {
        setRenderedItems(<NoContents />)
        setTotalPrice(0)
      } else {
        setTotalPrice(totalAmount(filteredItems))
      }
    }
  }
  console.log(renderedItems)

  return (
    <>
      <MonthForm
        totalPrice={totalPrice}
        onFilterHandler={onFilterHandler}
        monthTag={monthTag}
      ></MonthForm>

      <Table striped bordered hover className="mt-2">
        <thead className="thead">
          <tr>
            <th>날짜</th>
            <th>항목</th>
            <th>카테고리</th>
            <th>비용</th>
          </tr>
        </thead>
        <tbody className="tbody">{renderedItems}</tbody>
      </Table>
    </>
  )
}

export default List
