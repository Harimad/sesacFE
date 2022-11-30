import React from 'react'
import MovieComponent from './MovieComponent'

const Map = () => {
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
  return (
    <div>
      <h1>영화 정보</h1>
      {movieList.map((list, idx) => (
        <MovieComponent
          key={idx}
          title={list.title}
          open={list.open}
          img={list.img}
        ></MovieComponent>
      ))}
    </div>
  )
}

export default Map
