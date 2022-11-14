// fetch
let item
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    item = data
  })
  .then(() => {
    console.log(item) // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
  })
  .catch(error => console.log(error))

// async/await
let obj
async function foo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  obj = await res.json()
  console.log(obj)
}

foo() // {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
