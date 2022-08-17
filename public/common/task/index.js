function createTaskWithChildren(params) {
  const { text, id, status } = params;
  let task = createTask(id);
  addCustomCheckbox(task, status);
  addButtonDelete(task);
  addTaskText(task, text);
  return task;
}

function createTask(id) {
  let taskItem = document.createElement('div');
  taskItem.className = 'task';
  taskItem.setAttribute('data-id', id);
  return taskItem;
}

function addCustomCheckbox(taskItem, status) {
  fetch('/common/custom_checkbox')
    .then((response) => response.text())
    .then((text) => {
      let customCheckbox = document.createElement('div');
      taskItem.insertAdjacentElement('afterbegin', customCheckbox);
      customCheckbox.innerHTML = text;
      addCheckboxListener(customCheckbox);
      customCheckbox.querySelector('.custom_checkbox').checked = status;
    });
}

function addButtonDelete(taskItem) {
  fetch('/common/delete_button')
    .then((response) => response.text())
    .then((text) => {
      let deleteButton = document.createElement('div');
      taskItem.insertAdjacentElement('beforeend', deleteButton);
      deleteButton.innerHTML = text;
      addDeleteClickListener(deleteButton);
    });
}

function addTaskText(taskItem, text) {
  let task = document.createElement('div');
  task.className = 'task__text';
  taskItem.insertAdjacentElement('beforeend', task);
  task.innerText = text;
}
