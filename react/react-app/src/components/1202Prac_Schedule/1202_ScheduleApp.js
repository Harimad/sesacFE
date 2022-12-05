import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Input from './components/1202Prac_Schedule/Input'
import List from './components/1202Prac_Schedule/List'

const uid = () => {
  let a = new Uint32Array(3)
  window.crypto.getRandomValues(a)
  return (
    performance.now().toString(36) +
    Array.from(a)
      .map(A => A.toString(36))
      .join('')
  ).replace(/\./g, '')
}

const App = () => {
  const [state, setState] = useState([
    {
      id: 1,
      schedule: '2022-12-01',
      category: '🥡food',
      userInput: '커피',
      amount: '3000',
    },
    {
      id: 2,
      schedule: '2022-11-02',
      category: '🎬culture',
      userInput: '영화',
      amount: '12000',
    },
    {
      id: 3,
      schedule: '2022-10-03',
      category: '💰finance',
      userInput: '예금',
      amount: '37000',
    },
    {
      id: 4,
      schedule: '2022-09-04',
      category: '📸travel',
      userInput: '남극',
      amount: '4000000',
    },
    {
      id: 5,
      schedule: '2022-12-05',
      category: '📸travel',
      userInput: '일본',
      amount: '55000',
    },
    {
      id: 6,
      schedule: '2022-12-06',
      category: '💰finance',
      userInput: '적금',
      amount: '68888',
    },
    {
      id: 7,
      schedule: '2022-12-07',
      category: '🥡food',
      userInput: '라면',
      amount: '7700',
    },
  ])

  const changeHandler = newObj => {
    setState(prev => [...prev, newObj])
  }

  return (
    <div className="container mt-3">
      <Input changeHandler={changeHandler} uid={uid}></Input>
      <List state={state} uid={uid}></List>
    </div>
  )
}

export default App
