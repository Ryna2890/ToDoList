function createTaskWithChildren(taskText){
    let task = createTask()
    addButtonDelete(task)
    addTaskText(task, taskText)
    return task
}

function createTask() {
    let taskItem = document.createElement('div');
    taskItem.className = 'task';
    return taskItem;
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

