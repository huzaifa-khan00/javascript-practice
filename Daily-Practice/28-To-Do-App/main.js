let parentContainer = document.getElementById('container');
let tasklist = [];

function create(){
    let taskValue = document.getElementById('input');
    let createdAt = new Date();
    console.log(createdAt.getFullYear());
    parentContainer.innerHTML += `<div id="new-task-wrapper"><p id="new-task">${taskValue.value}</p><div id="btn-wrapper"><div id="update"></div><div id="delete"></div></div></div>`
}