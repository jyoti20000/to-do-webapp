document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = createTaskElement(taskText);
        document.getElementById('pendingTasksList').appendChild(taskItem);
        taskInput.value = '';

        // Hide "No pending tasks" message when task is added
        checkPendingTasks();
    }
}

// Create a new task element
function createTaskElement(taskText) {
    const li = document.createElement('li');

    // Create text node for the task
    const taskTextNode = document.createTextNode(taskText);
    li.appendChild(taskTextNode);

    // Create Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', completeTask);

    // Create Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', editTask);

    // Create Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);

    // Append buttons to the task item
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    return li;
}

// Function to mark a task as complete
function completeTask() {
    const taskItem = this.parentElement;

    // Remove Complete button
    taskItem.removeChild(this);

    // Remove Edit button as well
    const editBtn = taskItem.querySelector('.edit-btn');
    taskItem.removeChild(editBtn);

    // Append to completed tasks list
    document.getElementById('completedTasksList').appendChild(taskItem);

    // Check if pending tasks list is empty after marking task as complete
    checkPendingTasks();
}

// Function to edit a task
function editTask() {
    const taskItem = this.parentElement;

    // Only get the task text node (first child)
    const taskTextNode = taskItem.childNodes[0];

    // Prompt for new task text
    const newTaskText = prompt('Edit your task:', taskTextNode.textContent.trim());

    if (newTaskText) {
        taskTextNode.textContent = newTaskText;
    }
}

// Function to delete a task
function deleteTask() {
    const taskItem = this.parentElement;
    taskItem.remove();

    // Check if pending tasks list is empty after deleting task
    checkPendingTasks();
}

// Function to check pending tasks and show/hide message
function checkPendingTasks() {
    const pendingTasksList = document.getElementById('pendingTasksList');
    const noTasksMessage = document.getElementById('noPendingTasksMessage');

    // If there are no pending tasks, show the message
    if (pendingTasksList.children.length === 0) {
        noTasksMessage.style.display = 'block';
    } else {
        noTasksMessage.style.display = 'none';
    }
}

// Initially check pending tasks when the page loads
checkPendingTasks();





