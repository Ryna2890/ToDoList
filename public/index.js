const root = document.querySelector('.layout');
const taskListDone = document.querySelector('.layout__list_done_task');
const taskListDo = document.querySelector('.layout__list_do_task');

root.addEventListener('passText', (event) => {
  let taskText = event.detail.text;

  let task = createTaskWithChildren(taskText);
  addTaskToList(task);
});

function addTaskToList(taskItem) {
  taskListDo.appendChild(taskItem);
}

function addTaskToListDone(taskItem) {
  taskListDone.appendChild(taskItem);
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
    target.parentNode.style.backgroundColor = '#D9D9D9';
  } else {
    taskListDo.appendChild(target.parentNode);
    target.parentNode.style.backgroundColor = '#A5A6F63D';
  }
}

async function getTasks() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos');
  let content = await response.json();

  for (let todo of content) {
    let dataTasksText = todo.title;
    let completed = todo.completed;
    let task = createTaskWithChildren(dataTasksText);

    if (completed) {
      addTaskToList(task);
    } else {
      addTaskToListDone(task);
      task.parentNode.style.backgroundColor = '#A5A6F63D';
    }
  }
}

getTasks();
