const Seoul_API_KEY = `59647542426c656538345768506874`

const kakaoMapMarker = obj => {
  // 지도 표시 영역
  let mapContainer = document.querySelector('#map')

  // 지도 옵션
  let mapOption = {
    // 지도 중심좌표
    center: new kakao.maps.LatLng(37.51037979, 126.8667984),

    // 지도 확대 레벨
    level: 3,
  }

  // 지도를 표시할 div와 지도 옵션으로 지도를 생성
  let map = new kakao.maps.Map(mapContainer, mapOption)

  // 위치 정보 저장
  let positions = obj.map(item => ({
    title: item.RENT_NM,
    latlng: new kakao.maps.LatLng(item.STA_LAT, item.STA_LONG),
  }))

  console.log(positions) // (20) [ {title: '서교동 사거리', latlng: qa}, {title: '더샵스타시티 C동 앞', latlng: qa}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

  // 이미지 마커 경로
  let imageSrc = `https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png`

  // 이미지 마커 표시
  positions.forEach(position => {
    let imageSize = new kakao.maps.Size(24, 35)

    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

    // 마커 생성
    let marker = new kakao.maps.Marker({
      map: map,
      position: position.latlng,
      title: position.title,
      image: markerImage,
    })
  })
}

// 따릉이 대여소 데이터 받기
const getData = async () => {
  let res = await fetch(
    `http://openapi.seoul.go.kr:8088/${Seoul_API_KEY}/json/tbCycleStationInfo/1/50/`
  )
  let data = await res.json()
  console.log(data)
  let rows = data.stationInfo.row

  kakaoMapMarker(rows) // 대여소 위치데이터를 카카오 마커를 보여주는 함수에 전달
}

getData()
