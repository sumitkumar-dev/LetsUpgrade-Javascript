console.log("Question 3")

// fetch (' https://jsonplaceholder.typicode.com/todos/')


// .then(response=>response.json())
// .then((data=>console.log(data)))

function fetchTodo(){
    const response = fetch ('https://jsonplaceholder.typicode.com/todos/');
    const data = response;

    console.log (data);
}
fetchTodo();
