const toDoInput = document.querySelector('#input-value');
const toDoButton = document.querySelector('#button-add');
const toDoList = document.querySelector('#todo-list');
const completedTasks = document.querySelectorAll('.task');

let inputs = document.querySelectorAll("input");

toDoButton.addEventListener('click', addTask);
toDoList.addEventListener('click', deleteButton);

function addTask(event, param, ) {
    event.preventDefault();
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('task');
    const newtoDo = document.createElement('li');
    newtoDo.classList.add('todo-item');
    newtoDo.innerHTML = '<span>' + inputs[0].value + '</span>';
    toDoDiv.appendChild(newtoDo);
    const trashButton = document.createElement('button');
    trashButton.classList.add('delete');
    trashButton.innerHTML = '<img src="./pictures/trash-can-solid.svg" alt="">';
    toDoDiv.appendChild(trashButton);
    toDoList.appendChild(toDoDiv);
    clearInput();
}

function deleteButton(event) {
    const item = event.target;
    if (item.classList[0] === 'delete') {
        const task = item.parentElement;
        task.remove();
    }
}

function clearInput() {
    inputs[0].value = '';
} 
