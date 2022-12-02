import React from 'react'
import Form from 'react-bootstrap/Form'

const MonthForm = ({ totalPrice, onFilterHandler, monthTag }) => {
  return (
    <div>
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
    </div>
  )
}

export default MonthForm
