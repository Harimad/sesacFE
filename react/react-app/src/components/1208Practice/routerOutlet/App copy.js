import React from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Root from './components/1208Practice/routerOutlet/Root'
import Home from './components/1208Practice/routerOutlet/Home'
import Product from './components/1208Practice/routerOutlet/Product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>Page Not Found</div>,
    children: [
      { index: true, element: <Home /> },
      { path: '/product', element: <Product /> },
    ],
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
