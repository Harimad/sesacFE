import React from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Page Not Found</div>,
  },
  {
    path: '/product',
    element: <Product />,
    errorElement: <div>Page Not Found</div>,
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
