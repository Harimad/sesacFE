import React from 'react'
import './style/TodoInsert.scss'
import { MdAddCircleOutline } from 'react-icons/md'

const TodoInsert = () => {
  return (
    <form>
      <input type="text" placeholder="할일을 입력해 주세요."></input>
      <button onSubmit={() => {}}>
        <MdAddCircleOutline />
      </button>
    </form>
  )
}

export default TodoInsert
