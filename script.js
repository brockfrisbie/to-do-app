// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const addButton=document.getElementById("add-task-button");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;
      
        const listItem = document.createElement("li");
      
        // Create a span for the task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);
      
        // Create the delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.className = "delete-button";
        listItem.appendChild(deleteBtn);
      
        // Toggle complete on task text click
        taskSpan.addEventListener("click", function () {
          listItem.classList.toggle("completed");
          if (listItem.classList.contains("completed")) {
            taskList.appendChild(listItem);
          } else {
            taskList.insertBefore(listItem, taskList.firstChild);
          }
        });
      
        // Delete task on delete button click
        deleteBtn.addEventListener("click", function (e) {
          e.stopPropagation(); // Prevent triggering complete toggle
          listItem.remove();
        });
      
        taskList.insertBefore(listItem, taskList.firstChild);
        taskInput.value = "";
      });
});