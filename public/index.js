const root = document.querySelector('.layout');
const taskListDo = document.querySelector('.layout__list_do');
const taskListDone = document.querySelector('.layout__list_done');

root.addEventListener('passText', (event) => {
  let taskText = event.detail.text;

  let task = createTaskWithChildren(taskText);
  addTaskToList(task);
});

function addTaskToList(taskItem) {
  taskListDo.appendChild(taskItem);
}

root.addEventListener('deleteEvent', (event) => {
  event.target.parentNode.remove();
});

root.addEventListener('checkboxClick', (event) => {
  let checkboxCondition = event.detail.condition;
  let checkbox = event.target;
  doneByReplace(checkboxCondition, checkbox);
});

function doneByReplace(condition, target) {
  if (condition) {
    taskListDone.appendChild(target.parentNode);
  } else {
    taskListDo.appendChild(target.parentNode);
  }
}
