
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  axios.get("https://crudcrud.com/api/313306e4675d495594558ab906d36594/todo/")
  .then(res => {
    res.data.forEach(element => {
        console.log(element)        
    });
  } )
}

function postTodo() {
  let payload = {
    title: "Learn Axios",
    completed: false
  }
  axios.post("https://crudcrud.com/api/313306e4675d495594558ab906d36594/todo",payload)
}

function putTodo() {
    axios.get("https://crudcrud.com/api/313306e4675d495594558ab906d36594/todo/")
    .then(res => {
      res.data.forEach(element => {
          axios.put(`https://crudcrud.com/api/313306e4675d495594558ab906d36594/todo/${element._id}`,
          {
            completed: true
          })        
      });
    } )
}

function deleteTodo() {
    axios.get("https://crudcrud.com/api/313306e4675d495594558ab906d36594/todo")
    .then(res =>{
        res.data.forEach( items =>{
            axios.delete(`https://crudcrud.com/api/313306e4675d495594558ab906d36594/todo/${items._id}`)
            .then(console.log("Item deleted from crud"))
    })
        })
    }
     