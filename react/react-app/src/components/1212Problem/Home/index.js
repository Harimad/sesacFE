import React from 'react'
import Form from '../Form'

const Home = ({ makeFruit }) => {
  return (
    <div>
      <h1>🍓과일 데이터베이스🍆</h1>
      <Form makeFruit={makeFruit} />
    </div>
  )
}

export default Home
