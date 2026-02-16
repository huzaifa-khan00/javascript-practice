let parentContainer = document.getElementById('container');
let userTask = document.getElementById('input');

function create(){
    let addNewTask = document.createElement('p');
    addNewTask.id = 'new-task';
    addNewTask.innerText = userTask.value;
    parentContainer.appendChild(addNewTask);
    console.log(userTask);
}