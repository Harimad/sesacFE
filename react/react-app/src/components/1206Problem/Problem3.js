import React, { useReducer, useState } from 'react'

const uid = () => {
  let a = new Uint32Array(3)
  window.crypto.getRandomValues(a)
  return (
    performance.now().toString(36) +
    Array.from(a)
      .map(A => A.toString(36))
      .join('')
  ).replace(/\./g, '')
}

const personReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        member: [...state.member, { ...action.info }],
        count: ++state.count,
      }
    case 'DELETE':
      let filteredMembers = state.member.filter(one => one.id !== action.idx)
      return {
        ...state,
        member: [...filteredMembers],
        count: --state.count,
      }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(personReducer, {
    count: 0,
    member: [],
  })
  const [info, setInfo] = useState({})

  const changeHandler = e =>
    setInfo({ ...info, id: uid(), [e.target.name]: e.target.value })

  console.log(info)

  const addPerson = () => {
    dispatch({ type: 'ADD', info: info })
  }

  const deletePerson = e => {
    dispatch({ type: 'DELETE', idx: e.target.value })
  }

  return (
    <div>
      <div>
        <h1>전체 회원 수 : {state.count}</h1>
        <div>
          <label>이름 : </label>
          <input
            type={'text'}
            name="name"
            onChange={changeHandler}
            autoComplete="off"
          ></input>
        </div>
        <div>
          <label>나이 : </label>
          <input
            type={'number'}
            name="age"
            onChange={changeHandler}
            autoComplete="off"
          ></input>
        </div>
        <div>
          <label>주소 : </label>
          <input
            type={'text'}
            name="address"
            onChange={changeHandler}
            autoComplete="off"
          ></input>
        </div>

        <button onClick={addPerson}>추가</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>지역</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.member.map((person, idx) => (
            <tr key={idx}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.address}</td>
              <td>
                <button onClick={deletePerson} value={person.id}>
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
