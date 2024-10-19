let tasks = [];

function displayTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} [${task.completed ? 'Completed' : 'Not Completed'}]`);
        });
    }
}

function addTask() {
    const description = prompt("Enter task description:");
    if (description) {
        tasks.push({ description, completed: false });
        const taskIndex = tasks.length;
        console.log(`Task " ${taskIndex}: ${description}" added.`);
    }
}

function TaskCompletion() {
    displayTasks();
    const id = parseInt(prompt("Enter task ID to toggle completion status:"));
    if (id > 0 && id <= tasks.length) {
        tasks[id - 1].completed = !tasks[id - 1].completed;
        console.log(`Task ${id} is now ${tasks[id - 1].completed ? 'Completed' : 'Not Completed'}`);
    } else {
        console.log("Invalid task ID.");
    }
}

function removeTask() {
    displayTasks();
    const id = parseInt(prompt("Enter task ID to remove:"));
    if (id > 0 && id <= tasks.length) {
        const removedTask = tasks.splice(id - 1, 1);
        console.log(`Task "${removedTask[0].description}" removed.`);
    } else {
        console.log("Invalid task ID.");
    }
}

function updateTaskDescription() {
    const id = parseInt(prompt("Enter task ID to update:"));
    if (id > 0 && id <= tasks.length) {
        const newDescription = prompt("Enter new task description:");
        if (newDescription) {
            tasks[id - 1].description = newDescription;
            console.log(`Task ${id} description updated to "${newDescription}".`);
        }
    } else {
        console.log("Invalid ID.");
    }
}

function searchTasks() {
    const searchTerm = prompt("Enter a keyword to search for tasks:");
    if (searchTerm) {
        const filteredTasks = tasks.filter(task => task.description.toLowerCase().includes(searchTerm.toLowerCase()));
        if (filteredTasks.length > 0) {
            filteredTasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task.description} [${task.completed ? 'Completed' : 'Not Completed'}]`);
            });
        } else {
            console.log("No tasks match .");
        }
    }
}

function taskManager() {
    console.log("\nTask Manager");
    console.log("1. Display all tasks");
    console.log("2. Add a task");
    console.log("3. Toggle task completion");
    console.log("4. Remove a task");
    console.log("5. Update task description");
    console.log("6. Search tasks");
    console.log("7. Exit");

    const choice = prompt("Choose an option (1-7):");

    switch (choice) {
        case '1':
            displayTasks();
            break;
        case '2':
            addTask();
            break;
        case '3':
            TaskCompletion();
            break;
        case '4':
            removeTask();
            break;
        case '5':
            updateTaskDescription();
            break;
        case '6':
            searchTasks();
            break;
        case '7':
            console.log("Exiting Task Manager.");
            return; 
        default:
            console.log("Invalid choice, please try again.");
    }
  
    taskManager();
}

taskManager();
