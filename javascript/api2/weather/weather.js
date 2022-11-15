// 날씨 정보 가져오는 방법
// 1. 도시 이름(By City Name)
// 2. 도시 아이디(By City ID)
// 3. 도시 위치 (위도, 경도)(By Geographic Coordinates)
// 4. ZIP code(By ZIP Code)

const API_KEY = `2e386970e1e7dfbaf98f717b42aae57f`
const $weatherImg = document.querySelector('#weatherImg')
const $degree = document.querySelector('#degree')
const $city = document.querySelector('#city')

const renderWeather = data => {
  $degree.innerText = data.main.temp
  $city.innerText = data.name
  if (data.weather[0].main === 'Clouds') {
    $weatherImg.src = './img/clouds.png'
  }
}

const onGeoLocation = async position => {
  // console.log(position) // GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1668473333927}
  const lat = position.coords.latitude // 위도
  const lon = position.coords.longitude // 경도

  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
  let data = await res.json()
  renderWeather(data)
  console.log(data)
}

const onGeoError = err => {
  console.warn(`ERROR(${err.code}): ${err.message}`)
}
navigator.geolocation.getCurrentPosition(onGeoLocation, onGeoError)
