function createTaskWithChildren(taskText) {
    let task = createTask()
    addCustomCheckbox(task)
    addButtonDelete(task)
    addTaskText(task, taskText)
    return task
}

function createTask() {
    let taskItem = document.createElement('div');
    taskItem.className = 'task';
    return taskItem;
}

function addCustomCheckbox(taskItem) {
    fetch('/common/custom_checkbox')
        .then(response => response.text())
        .then(text => {
            let customCheckbox = document.createElement('div');
            taskItem.insertAdjacentElement('afterbegin', customCheckbox)
            customCheckbox.innerHTML = text;
        })
}

function addButtonDelete(taskItem) {
    fetch('/common/delete_button')
        .then(response => response.text())
        .then(text => {
            let deleteButton = document.createElement('div');
            taskItem.insertAdjacentElement('beforeend', deleteButton)
            deleteButton.innerHTML = text;
        })
}

function addTaskText(taskItem, text) {
    let task = document.createElement('div');
    task.className = 'task__text';
    taskItem.insertAdjacentElement('beforeend', task);
    task.innerText = text;
}

