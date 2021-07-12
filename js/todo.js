const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.getElementsByTagName("input");
const TODOS_KEY = "todos";

//let toDos = JSON.parse(localStorage.getItem("TODOS_KEY"));
let toDos = [];

function addLi(item) {
    paintToDo(item);
}

function saveToDos() {
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = (toDos.filter((item)=> item.id!==parseInt(li.id)));
    saveToDos();
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id=newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDo)
    li.append(span);
    li.append(button);
    toDoList.append(li);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = toDoInput[0].value;
    toDoInput[0].value = "";
    const newToDoObj={
        text:newToDo,
        id:Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const parsedToDos = JSON.parse(localStorage.getItem("TODOS_KEY"));
if(parsedToDos) {
    //parsedToDos.forEach(addLi);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}