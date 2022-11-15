// fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data)) // {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
  .catch(error => console.log(error))

// async/await
async function foo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await res.json()
  console.log(data)
}

foo() // {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
