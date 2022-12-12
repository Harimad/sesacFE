import React, { useState, useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import {
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'
import { db } from '../../../firebase'

const Product = () => {
  const [fruit, setFruit] = useState({})
  const { productId } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const fruitCollection = collection(db, 'fruits')

  useEffect(() => {
    setFruit({ ...state })
  }, [])

  console.log(fruit)

  async function updateFruit() {
    await updateDoc(doc(fruitCollection, productId), {
      name: fruit.name,
      season: fruit.season,
      color: fruit.color,
      taste: fruit.taste,
      count: fruit.count,
      price: fruit.price,
    })
    navigate('/products')
  }

  async function deleteFruit() {
    await deleteDoc(doc(fruitCollection, productId))
    navigate('/products')
  }

  const changeHandler = e => {
    setFruit(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      <h1>{productId} 제품 상세 페이지</h1>
      <div>
        <label>상품이름</label>
        <input value={fruit.name} name="name" onChange={changeHandler}></input>
      </div>
      <div>
        <label>수확시기</label>
        <input
          value={fruit.season}
          name="season"
          onChange={changeHandler}
        ></input>
      </div>
      <div>
        <label>상품색상</label>
        <input
          value={fruit.color}
          name="color"
          onChange={changeHandler}
        ></input>
      </div>
      <div>
        <label>상품당도</label>
        <input
          value={fruit.taste}
          name="taste"
          onChange={changeHandler}
        ></input>
      </div>
      <div>
        <label>생상수량</label>
        <input
          value={fruit.count}
          name="count"
          onChange={changeHandler}
        ></input>
      </div>
      <div>
        <label>상품가격</label>
        <input
          value={fruit.price}
          name="price"
          onChange={changeHandler}
        ></input>
      </div>
      <div>
        <button onClick={updateFruit}>수정</button>
        <button onClick={deleteFruit}>제거</button>
      </div>
    </div>
  )
}

export default Product
