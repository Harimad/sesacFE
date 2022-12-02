import React, { useState, useEffect, useRef } from 'react'
import ListItem from './ListItem'
import './List.scss'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import NoContents from './NoContents'

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
      <div className="monthContainer mt-5">
        <p className="total">
          총 비용: <span>{totalPrice}</span>원
        </p>
        <Form.Select
          aria-label="Default select example"
          id="monthFilter"
          name="filter"
          className="month"
          onChange={onFilterHandler}
          ref={monthTag}
          required
        >
          <option value="all">All</option>
          <option value="0">1월</option>
          <option value="1">2월</option>
          <option value="2">3월</option>
          <option value="3">4월</option>
          <option value="4">5월</option>
          <option value="5">6월</option>
          <option value="6">7월</option>
          <option value="7">8월</option>
          <option value="8">9월</option>
          <option value="9">10월</option>
          <option value="10">11월</option>
          <option value="11">12월</option>
        </Form.Select>
      </div>
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
