import React from 'react'

const PriceList = props => {
  return <div>{props.prices}</div>
}

const App = () => {
  const priceList = [1000, 2000, 3000, 4000]
  const prices = priceList.map(price => <div key={price}>가격: {price}원</div>)
  return (
    <div>
      <PriceList prices={prices}></PriceList>
    </div>
  )
}

export default App
