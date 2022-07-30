const root = document.querySelector('.layout');
const taskListDo = document.querySelector('.layout__list_do');

root.addEventListener('passText', (event) => {
  let taskText = event.detail.text;

  let task = createTaskWithChildren(taskText);
  addTaskToList(task);
});

function addTaskToList(taskItem) {
  taskListDo.appendChild(taskItem);
}

taskListDo.addEventListener('deleteEvent', (event) => {
  event.target.parentNode.remove();
});

root.addEventListener('checkboxClick', (event) => {
  console.log(event.detail);
});
