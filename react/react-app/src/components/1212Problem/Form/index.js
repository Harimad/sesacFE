import React, { useState } from 'react'

const Form = ({ makeFruit }) => {
  const [input, setInput] = useState({})
  const changeHandler = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submitHandler = () => {
    // e.preventDefault()
    makeFruit(input)
  }
  return (
    <div>
      <div>
        <label>이름</label>
        <input
          type={'text'}
          name="name"
          onChange={changeHandler}
          autoComplete="off"
        ></input>
      </div>
      <div>
        <label>계절</label>
        <input
          type={'text'}
          name="season"
          onChange={changeHandler}
          autoComplete="off"
        ></input>
      </div>
      <div>
        <label>색상</label>
        <input
          type={'text'}
          name="color"
          onChange={changeHandler}
          autoComplete="off"
        ></input>
      </div>
      <div>
        <label>맛</label>
        <input
          type={'text'}
          name="taste"
          onChange={changeHandler}
          autoComplete="off"
        ></input>
      </div>
      <div>
        <label>수량</label>
        <input
          type={'number'}
          name="count"
          onChange={changeHandler}
          autoComplete="off"
        ></input>
      </div>
      <div>
        <label>가격</label>
        <input
          type={'number'}
          name="price"
          onChange={changeHandler}
          autoComplete="off"
        ></input>
      </div>
      <div>
        <button onClick={submitHandler}>추가</button>
      </div>
    </div>
  )
}

export default Form
