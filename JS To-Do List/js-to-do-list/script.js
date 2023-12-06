function editTask(taskItem, inputElement) {
    const currentText = taskItem.firstChild.textContent;
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.value = currentText;
    newInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            taskItem.firstChild.textContent = newInput.value.trim() !== '' ? newInput.value : currentText;
            taskItem.replaceChild(taskItem.firstChild, newInput);
            taskItem.insertBefore(taskItem.firstChild, taskItem.childNodes[0]);
        }
    });

    taskItem.replaceChild(newInput, taskItem.firstChild);
    newInput.focus();
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    taskItem.appendChild(taskText);

    // Adding edit functionality
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function() {
        editTask(taskItem, taskInput);
    };

    // Adding delete functionality
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}
