const newTask = document.querySelector('#new-task');
const addTask = document.querySelector('#add-task');
const taskList = document.querySelector('#tasks');

function addNewTask() {
  const task = newTask.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    li.innerHTML += '<span>&times;</span>';
    taskList.appendChild(li);
    newTask.value = '';
    li.querySelector('span').addEventListener('click', removeTask);
    li.addEventListener('click', toggleCompleted);
  }
}

function removeTask() {
  const li = this.parentElement;
  li.remove();
}

function toggleCompleted() {
  this.classList.toggle('completed');
}

addTask.addEventListener('click', addNewTask);
