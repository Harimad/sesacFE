import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const movieList = [
  {
    title: '공조2: 인터내셔날',
    open: '2022.09.07',
    img: 'http://placekitten.com/200/200',
  },
  {
    title: '인생은 아름다워',
    open: '2022.09.28',
    img: 'http://placekitten.com/200/201',
  },
  {
    title: '정직한 후보2',
    open: '2022.09.28',
    img: 'http://placekitten.com/201/200',
  },
]

const App = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Open</TableCell>
              <TableCell align="right">Img</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movieList.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.open}</TableCell>
                <TableCell align="right">
                  <img src={row.img} alt="img" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
