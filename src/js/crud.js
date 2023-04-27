//CREATE POST 

const user = {
    name: "Sofia", 
    age: 25,
}
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  fetch('https://jsonplaceholder.typicode.com/posts/100')
  .then((response) => response.json())
  .then((json) => console.log(json));


const response = await axios.post('https://jsonplaceholder.typicode.com/posts');

// PUT - оновлення

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));