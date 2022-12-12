import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/1212Problem/Root'
import Home from './components/1212Problem/Home'
import Error from './components/1212Problem/Error'
import Products from './components/1212Problem/Products'
import Product from './components/1212Problem/Product'

const App = () => {
  const fruitCollection = collection(db, 'fruits')
  const [fruits, setFruits] = useState([])

  // Firebase 데이터 조회
  useEffect(() => {
    async function getFruits() {
      const data = await getDocs(fruitCollection)
      setFruits(data.docs)
    }
    getFruits()
  }, [])

  // 수정
  async function makeFruit(fruit) {
    await setDoc(doc(fruitCollection), {
      name: fruit.name,
      season: fruit.season,
      color: fruit.color,
      taste: fruit.taste,
      count: fruit.count,
      price: fruit.price,
    })
  }

  // 라우터 정의
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home makeFruit={makeFruit} />,
        },
        {
          path: '/products',
          element: <Products fruits={fruits} />,
        },
        { path: '/products/:productId', element: <Product /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
export default App
