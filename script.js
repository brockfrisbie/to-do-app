// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const addButton=document.getElementById("add-task-button");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        
        // Add click event to toggle completion
        listItem.addEventListener("click", function () {
            listItem.classList.toggle("completed");

            // Move to bottom if marked complete
            if (listItem.classList.contains("completed")) {
                taskList.appendChild(listItem);

            } else {
                // Move to top if unmarked
                taskList.insertBefore(listItem, taskList.firstChild);
            }
        });

        taskList.insertBefore(listItem, taskList.firstChild);
        taskInput.value ="";
    });
});