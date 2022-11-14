const $tbody = document.querySelector('tbody')

const makeRow = obj => {
  let result = ''
  obj.forEach(item => {
    result += `
		<tr>
			<td>${item.id}</td>
			<td>${item.name}</td>
			<td>${item.email}</td>
			<td>${item.phone}</td>
			<td>${item.website}</td>
		</tr>
		`
  })

  $tbody.innerHTML = result
}

// 1. 게시판 만들기 (READ)
// async/await
const getData = async () => {
  const response = await fetch('http://localhost:5050/users')
  const data = await response.json()
  makeRow(data)
}
getData()

// fetch
// fetch('http://localhost:5050/users')
//   .then(response => response.json())
//   .then(data => {
//     makeRow(data)
//   })
//   .catch(error => console.log(error))

// 2. POST
// const $submitBtn = document.querySelector('#submitBtn')
// const $userId = document.querySelector('#userId')
// const $userName = document.querySelector('#userName')
// const $userEmail = document.querySelector('#userEmail')
// const $userPhone = document.querySelector('#userPhone')
// const $userWebsite = document.querySelector('#userWebsite')

// const createData = async (data = {}) => {
//   let res = await fetch(`http://localhost:5050/users`, {
//     method: 'POST', // *GET, POST, PUT, DELETE 등
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//   return res.json()
// }
// $submitBtn.addEventListener('click', () => {
//   createData({
//     name: $userName.value,
//     email: $userEmail.value,
//     phone: $userPhone.value,
//     website: $userWebsite.value,
//   })
//   getData()
// })

// 2-2. POST 2
const $form = document.querySelector('.form-container')

$form.addEventListener('submit', e => {
  e.preventDefault()

  const formData = new FormData($form)

  for (item of formData.entries()) {
    console.log(item)
  }

  const userInfo = new URLSearchParams(formData)

  // for ([key, value] of userInfo.entries()) {
  //   console.log(key, value)
  // }
  // console.log(`userInfo.entries(), ${userInfo}`)

  fetch(`http://localhost:5050/users`, {
    method: 'POST',
    body: userInfo,
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

  getData()
})

// 3. PUT

// 4. DELETE
