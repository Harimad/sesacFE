import React, { useEffect } from 'react'
import { db } from './firebase'
import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  setDoc,
  updateDoc,
  deleteDoc,
  deleteField,
} from 'firebase/firestore'

const App = () => {
  const fruitCollection = collection(db, 'fruits')

  // useEffect(() => {

  // DB 연결 확인
  console.log(db)

  async function getFruits1() {
    const data = await getDocs(fruitCollection)
    console.log(data)
  }

  async function getFruits2() {
    const docRef = doc(fruitCollection, '수박')
    const data = await getDoc(docRef)
    if (data.exists()) {
      console.log('결과: ', data.data()) // 결과:  {taste: '달콤', color: '빨강', season: '여름', price: '12000'}
    } else {
      console.log('결과 없음')
    }
  }

  async function getFruits3() {
    const data1 = query(fruitCollection, where('season', '==', '가을'))
    const data2 = query(fruitCollection, where('price', '>', 6000))
    const querySnapshot = await getDocs(data2)

    querySnapshot.forEach(doc => {
      console.log(doc.id, ' : ', doc.data())
    })
  }

  // getFruits1()
  // getFruits2()
  // getFruits3()
  // }, [])

  async function setFruit() {
    await setDoc(doc(fruitCollection, '바나나'), {
      season: '봄',
      color: '노랑',
      taste: '달콤',
      price: 4000,
    })
  }

  async function updateFruit() {
    await updateDoc(doc(fruitCollection, '바나나'), {
      season: '봄',
      color: '노랑',
      taste: '달콤',
      price: 4002,
      count: 10,
    })
  }

  async function deleteFruit() {
    await deleteDoc(doc(fruitCollection, '바나나'))
  }

  async function deleteFieldFruit() {
    await updateDoc(doc(fruitCollection, '바나나'), {
      count: deleteField(),
    })
  }

  return (
    <div>
      <button onClick={setFruit}>과일 추가</button>
      <button onClick={updateFruit}>과일 수정</button>
      <button onClick={deleteFruit}>과일 삭제</button>
      <button onClick={deleteFieldFruit}>특정 필드 삭제</button>
    </div>
  )
}
export default App
