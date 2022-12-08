import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/1208Practice/useNavigate/Root'
import NotFound from './components/1208Practice/useNavigate/NotFound'
import Home from './components/1208Practice/useNavigate/Home'
import Product from './components/1208Practice/useNavigate/Product'
import ProductInfo from './components/1208Practice/useNavigate/ProductInfo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/product', element: <Product /> },
      { path: '/product/:productId', element: <ProductInfo /> },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
