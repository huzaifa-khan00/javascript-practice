let taskContainer = document.getElementById("task-container");
let taskList = [];
let updateIndex = null;
let addBtn = document.getElementById("add-task");
let updateBtn = document.getElementById("update-task");

updateBtn.style.display = "none";

function getLocalStorageData() {
  let getTasksData = window.localStorage.getItem("taskList");
  if (getTasksData !== null) {
    taskList = JSON.parse(getTasksData);
  }
  readTask();
}
getLocalStorageData();

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

  taskList.push(taskObj);
  window.localStorage.setItem("taskList", JSON.stringify(taskList));

  taskValue.value = "";
  readTask();
}

function readTask() {
  taskContainer.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    taskContainer.innerHTML += `
        <div id="new-task-wrapper">
            <p id="new-task">${taskList[i].text}</p>
            <div id="btn-wrapper">
                <div id="update" onClick="editTask(${taskList[i].id})"></div>
                <div id="delete" onClick="deleteTask(${taskList[i].id})"></div>
            </div>
        </div><div id="created-at">${taskList[i].createdAt}</div>`;
  }
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      window.localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }
  readTask();
}

function editTask(id) {
  let taskValue = document.getElementById("input");

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskValue.value = taskList[i].text;
      updateIndex = i;
    }
  }

  addBtn.style.display = "none";
  updateBtn.style.display = "inline";
  updateBtn.setAttribute("onClick", "finalUpdate()");
}

function finalUpdate() {
  let taskValue = document.getElementById("input");

  taskList[updateIndex].text = taskValue.value;
  window.localStorage.setItem("taskList", JSON.stringify(taskList));

  taskValue.value = "";

  updateBtn.style.display = "none";
  addBtn.style.display = "inline";

  readTask();
}

function deleteAll() {
  taskList = [];
  window.localStorage.removeItem("taskList");
  readTask();
}