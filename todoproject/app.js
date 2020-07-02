//selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//addEventListeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterToDo);

// function

function addToDo(event){
    //Prevent form from submitting
    event.preventDefault();
    //TOdo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTOdo = document.createElement("li");
    newTOdo.innerText = todoInput.value;
    newTOdo.classList.add("todo-item");
    todoDiv.appendChild(newTOdo);

    //send value into saveLocalTodos
    saveLocalToDos(todoInput.value);

    //to clear local storage type [[LocalStorage.clear()]];

    //Create a check button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class = 'fa fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class = 'fa fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Main append
    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;

    //Delete TODO
    if(item.classList[0] === "trash-btn"){
        const td = item.parentElement;
        td.classList.add("fall");
        td.addEventListener("transitionend", function(){
            td.remove();
        })

    }

    //Check TODO
    if(item.classList[0] === "complete-btn"){
        const td = item.parentElement;
        td.classList.toggle("completed");
    }
}

function filterToDo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
                
            case "pending":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
                
        }
    })
}

function saveLocalToDos(todo){
// Check do we have a same thing there
let todos;
if(localStorage.getItem("todos") === null){
    todos = [];
}else{
    todos = JSON.parse(localStorage.getItem("todos"));
}

todos.push(todo);
localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function(todo){
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //create LI
        const newTOdo = document.createElement("li");
        newTOdo.innerText = todo;
        newTOdo.classList.add("todo-item");
        todoDiv.appendChild(newTOdo);
    
        //Create a check button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = "<i class = 'fa fa-check'></i>";
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
    
        const trashButton = document.createElement("button");
        trashButton.innerHTML = "<i class = 'fa fa-trash'></i>";
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
    
        //Main append
        todoList.appendChild(todoDiv);
    
    })
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    // const todoIndex = ;
}
