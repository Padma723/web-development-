let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    displayTasks();
}

function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">x</button>
        `;
        list.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

displayTasks();