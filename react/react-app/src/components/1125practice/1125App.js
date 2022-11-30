//---------- 1 번 ----------
// import React from 'react'

// const App = () => {
//   const names = ['HTML', 'CSS', 'Javascript', 'React']
//   return (
//     <div>
//       {names.map(name => (
//         <li>{name}</li>
//       ))}
//     </div>
//   )
// }

// export default App

//---------- 2 번 ----------
// import React from 'react'

// const Card = props => {
//   console.log(props)
//   return (
//     <div style={{ padding: '20px', margin: '10px', background: 'grey' }}>
//       <div>
//         <img src={props.list.img} alt="img"></img>
//       </div>
//       <div>
//         <p>{props.list.name}</p>
//         <p>{props.list.age}</p>
//         <p>{props.list.address}</p>
//       </div>
//     </div>
//   )
// }

// const App = () => {
//   const dataList = [
//     {
//       name: 'Lee',
//       age: 20,
//       address: 'Seoul',
//       img: 'https://placekitten.com/200/200',
//     },
//     {
//       name: 'Kim',
//       age: 30,
//       address: 'Busan',
//       img: 'https://placekitten.com/200/201',
//     },
//     {
//       name: 'Park',
//       age: 40,
//       address: 'Jeju',
//       img: 'https://placekitten.com/201/200',
//     },
//     {
//       name: 'Choi',
//       age: 40,
//       address: 'Jeju',
//       img: 'https://placekitten.com/201/199',
//     },
//   ]
//   console.log(dataList)
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//       {dataList.map((list, idx) => (
//         <Card key={idx} list={list} />
//       ))}
//     </div>
//   )
// }

// export default App

//---------- 3 번 ----------
import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const App = () => {
  const dataList = [
    {
      name: 'Lee',
      age: 20,
      address: 'Seoul',
      img: 'https://placekitten.com/200/200',
    },
    {
      name: 'Kim',
      age: 30,
      address: 'Busan',
      img: 'https://placekitten.com/200/201',
    },
    {
      name: 'Park',
      age: 40,
      address: 'Jeju',
      img: 'https://placekitten.com/201/200',
    },
    {
      name: 'Choi',
      age: 40,
      address: 'Jeju',
      img: 'https://placekitten.com/201/199',
    },
  ]
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ background: 'lightgreen' }}>
              <TableCell>ID</TableCell>
              <TableCell align="center">Profile</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.map((row, idx) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {idx + 1}
                </TableCell>
                <TableCell align="center">
                  <img src={row.img} alt="img" />
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
