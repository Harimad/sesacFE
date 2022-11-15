const Seoul_API_KEY = `59647542426c656538345768506874`

let stationList = []

// Seoul Bike
const getData = async () => {
  let res = await fetch(
    `http://openapi.seoul.go.kr:8088/${Seoul_API_KEY}/json/tbCycleStationInfo/1/20/`
  )
  let data = await res.json()

  let rows = data.stationInfo.row
  // console.log(rows)

  rows.forEach(row => {
    let stationName = row.RENT_NM
    let stationLatitude = row.STA_LAT
    let stationLongitude = row.STA_LONG
    console.log(stationName, stationLatitude, stationLongitude)

    let stationInfo = {
      stationName,
      stationLatitude,
      stationLongitude,
    }

    stationList.push(stationInfo)

    let positions = []

    stationList.forEach(info => {
      positions.push({
        latlng: new kakao.maps.LatLng(
          info.stationLatitude,
          info.stationLongitude
        ),
        title: info.stationName,
      })
    })
    showMap(positions)
  })
}

function showMap(positions) {
  let mapContainer = document.querySelector('#map')

  let mapOption = {
    center: new kakao.maps.LatLng(37.5556488, 126.91062927),
    level: 3,
    marker: positions,
  }

  let map = new kakao.maps.Map(mapContainer, mapOption)

  let imageSrc = `https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png`

  positions.forEach(item => {
    let imageSize = new kakao.maps.Size(24, 35)
    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

    let marker = new kakao.maps.Marker({
      map: map,
      position: item.latlng,
      title: item.title,
      image: markerImage,
    })
  })
}

getData()

// Kakao Map
