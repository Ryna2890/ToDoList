const root = document.querySelector('.layout');
const taskListDone = document.querySelector('.layout__list_done_task');
const taskListDo = document.querySelector('.layout__list_do_task');
const toDoApi = new TaskApi('https://jsonplaceholder.typicode.com');

toDoApi.read().then((content) => loadTask(content));

root.addEventListener('passText', (event) => {
  let taskText = event.detail.text;
  let id = Date.now();
  let status = false;
  const params = {
    text: taskText,
    status,
    id,
  };

  let task = createTaskWithChildren(params);
  addTaskToList(task, taskListDo);
  toDoApi.create(params);
});

function addTaskToList(taskItem, taskList) {
  taskList.appendChild(taskItem);
}

root.addEventListener('deleteEvent', (event) => {
  event.target.parentNode.remove();
  let id = event.target.parentNode.getAttribute('data-id');
  toDoApi.delete(id);
});

root.addEventListener('checkboxClick', (event) => {
  let checkboxCondition = event.detail.condition;
  let checkbox = event.target;
  let id = event.target.parentNode.getAttribute('data-id');
  doneByReplace(checkboxCondition, checkbox);
  toDoApi.update(id, checkboxCondition);
});

function doneByReplace(condition, target) {
  if (condition) {
    taskListDone.appendChild(target.parentNode);
    target.parentNode.style.backgroundColor = 'rgba(217, 217, 217, 0.24)';
  } else {
    taskListDo.appendChild(target.parentNode);
    target.parentNode.style.backgroundColor = '#A5A6F63D';
  }
}

function loadTask(content) {
  for (let todo of content) {
    const { title: text, completed: status, id } = todo;
    let task = createTaskWithChildren({ text, status, id });

    if (status) {
      addTaskToList(task, taskListDone);
      task.style.backgroundColor = '#D9D9D9';
    } else {
      addTaskToList(task, taskListDo);
    }
  }
}
