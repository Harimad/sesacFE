import React, { useState, useRef } from 'react'
import './Input.scss'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Input = props => {
  const [data, setData] = useState({})

  const changeHandler = e =>
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const clickHandler = e => {
    if (!data.schedule || !data.category || !data.userInput || !data.amount) {
      alert('모든 항목을 입력해 주세요.')
      return
    }
    props.changeHandler({ id: props.uid(), ...data })
    setData({})
    dateInput.current.value = ''
    categoryInput.current.value = ''
    userInput.current.value = ''
    amountInput.current.value = ''
  }

  const dateInput = useRef()
  const categoryInput = useRef()
  const userInput = useRef()
  const amountInput = useRef()

  return (
    <div>
      {/* Date Picker */}
      <div>
        <Form.Label htmlFor="start">Start date:</Form.Label>
        <Form.Control
          type="date"
          id="start"
          name="schedule"
          // value="2022-12-01"
          min="2022-01-01"
          max="2022-12-31"
          required
          onChange={changeHandler}
          ref={dateInput}
          aria-describedby="userDate"
        ></Form.Control>
        <Form.Text id="userDate" muted>
          날짜 선택
        </Form.Text>
      </div>

      {/* Select */}
      <div>
        <Form.Label htmlFor="categorySelect">Category</Form.Label>
        <Form.Select
          aria-label="Default select example"
          id="categorySelect"
          name="category"
          onChange={changeHandler}
          required
          ref={categoryInput}
          aria-describedby="userCategory"
        >
          <option value="etc" readOnly>
            --항목 선택--
          </option>
          <option value="🥡food">음식</option>
          <option value="🎬culture">문화</option>
          <option value="💰finance">금융</option>
          <option value="📸travel">여행</option>
        </Form.Select>
        <Form.Text id="userCategory" muted>
          카테고리를 선택해 주세요.
        </Form.Text>
      </div>

      {/* User Input */}
      <div>
        <Form.Label htmlFor="userInput">Title</Form.Label>
        <Form.Control
          type="text"
          id="userInput"
          name="userInput"
          required
          minLength="1"
          maxLength="20"
          size="10"
          autoComplete="off"
          onChange={changeHandler}
          ref={userInput}
          aria-describedby="userTitle"
        />
        <Form.Text id="userTitle" muted>
          지출 내역 작성
        </Form.Text>
      </div>

      {/* Amount */}
      <div>
        <Form.Label htmlFor="amount">Amount</Form.Label>
        <Form.Control
          type="number"
          id="amount"
          name="amount"
          required
          size="10"
          autoComplete="off"
          onChange={changeHandler}
          ref={amountInput}
          aria-describedby="userAmount"
        />
        <Form.Text id="userAmount" muted>
          가격 입력
        </Form.Text>
      </div>

      <div className="d-grid gap-2">
        <Button variant="outline-success" size="lg" onClick={clickHandler}>
          추가
        </Button>
      </div>
    </div>
  )
}

export default Input
