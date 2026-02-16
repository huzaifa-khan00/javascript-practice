let parentContainer = document.getElementById('container');
let userTask = document.getElementById('input');

function create(){
    // let addNewTask = document.createElement('p');
    // addNewTask.id = 'new-task';
    // addNewTask.innerText = userTask.value;
    parentContainer.innerHTML += `<div id="new-task-wrapper"><p id="new-task">${userTask.value}</p><div id="btn-wrapper"><button id="update">Update</button><button id="delete">Delete</button></div>`;
    console.log(parentContainer.innerHTML);
}