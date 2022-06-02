const toDoform = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDolist = document.getElementById("todo-list");

let ToDos = [];

const TODOS_KEY = "todos";

//todo 리스트 지우기
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
}

//todo리스트 저장하기(문자형으로)
function savedToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(ToDos));
}

//todo리스트 생성하기
function paintTodo(newtoDo){
    const li = document.createElement("li");
    li.id = newtoDo.id;
    const span = document.createElement("span");
    span.innerText = newtoDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDolist.appendChild(li);
}

//Submit활동이 발생됐을때 실행할거
function handleTodoSubmit(event) {
    event.preventDefault();
    const newtoDo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj = {
        text : newtoDo,
        id : Date.now(),
    };
    ToDos.push(newTodoObj);
    paintTodo(newTodoObj);
    savedToDos();
}

toDoform.addEventListener("submit",handleTodoSubmit);

const ToDosSaved = localStorage.getItem(TODOS_KEY);

if(ToDosSaved !== null){
    const paresedTodo = JSON.parse(ToDosSaved);
    toDos = paresedTodo;
    paresedTodo.forEach(paintTodo);
}
