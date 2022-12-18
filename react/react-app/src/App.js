import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Detail from './components/redux/Detail'
import Home from './components/redux/Home'

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
