import React, { useState, useEffect } from 'react'
import Item from '../Item'
import { db } from '../../../firebase'
import { getDocs, collection } from 'firebase/firestore'
const Products = () => {
  const [data, setData] = useState([])
  const fruitCollection = collection(db, 'fruits')

  async function getFruits1() {
    const data = await getDocs(fruitCollection)
    setData(data.docs)
  }

  useEffect(() => {
    getFruits1()
  }, [data.length])

  return (
    <div>
      <h1>전체 상품 리스트</h1>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>수확시기</th>
            <th>색상</th>
            <th>당도</th>
            <th>수량</th>
            <th>가격</th>
            <th>상세정보</th>
          </tr>
        </thead>
        <tbody>
          {data.map((fruit, idx) => {
            return <Item key={idx} data={fruit.data()} id={fruit.id} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Products
