let taskContainer = document.getElementById("task-container");
let tasklist = [];
let updateIndex = null;

let addBtn = document.getElementById("add-task");
let updateBtn = document.getElementById("update-task");

updateBtn.style.display = "none";

function createTask() {
  let taskValue = document.getElementById("input");

  if (taskValue.value.length < 1) {
    alert("Please enter a task");
    return;
  }

  let taskObj = {
    id: Date.now(),
    text: taskValue.value,
    createdAt: new Date(),
  };

  tasklist.push(taskObj);
  taskValue.value = "";
  readTask();
}

function readTask() {
  taskContainer.innerHTML = "";

  for (let i = 0; i < tasklist.length; i++) {
    taskContainer.innerHTML += `
        <div id="new-task-wrapper">
            <p id="new-task">${tasklist[i].text}</p>
            <div id="btn-wrapper">
                <div id="update" onClick="editTask(${tasklist[i].id})"></div>
                <div id="delete" onClick="deleteTask(${tasklist[i].id})"></div>
            </div>
        </div>`;
  }
}

function deleteTask(id) {
  for (let i = 0; i < tasklist.length; i++) {
    if (tasklist[i].id == id) {
      tasklist.splice(i, 1);
    }
  }
  readTask();
}

function editTask(id) {
  let taskValue = document.getElementById("input");

  for (let i = 0; i < tasklist.length; i++) {
    if (tasklist[i].id == id) {
      taskValue.value = tasklist[i].text;
      updateIndex = i;
    }
  }

  addBtn.style.display = "none";
  updateBtn.style.display = "inline";
  updateBtn.setAttribute("onClick", "finalUpdate()");
}

function finalUpdate() {
  let taskValue = document.getElementById("input");

  tasklist[updateIndex].text = taskValue.value;
  taskValue.value = "";

  updateBtn.style.display = "none";
  addBtn.style.display = "inline";

  readTask();
}