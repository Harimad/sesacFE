// 1
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  appId: process.env.REACT_APP_FIREBASE_WEB_APP_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
}

// Firebase 초기화
const app = initializeApp(firebaseConfig)

// Firebase 객체 저장
export const db = getFirestore(app)

// ----------------------------------------------------------------------
// 2

// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: 'AIzaSyCyZZbxWHB1m94ZUOB-TFKqvsCQdSPsxaI',
//   authDomain: 'sesac-827ad.firebaseapp.com',
//   projectId: 'sesac-827ad',
//   storageBucket: 'sesac-827ad.appspot.com',
//   messagingSenderId: '203386912221',
//   appId: '1:203386912221:web:7abedcd40d4e4d5ae44a34',
//   measurementId: 'G-52JGNYQ6C5',
// }

// const app = initializeApp(firebaseConfig)
// export const db = getFirestore(app)
