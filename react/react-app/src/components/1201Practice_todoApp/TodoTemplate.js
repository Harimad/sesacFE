import React from 'react'
import './style/TodoTemplate.scss'
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'

const TodoTemplate = props => {
  console.log(props.children)
  return (
    <div className="container">
      <h1 className="title">{props.children}</h1>
      <div className="contents">
        <TodoInsert></TodoInsert>
        <TodoList></TodoList>
      </div>
    </div>
  )
}

export default TodoTemplate
