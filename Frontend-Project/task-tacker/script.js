document.addEventListener("DOMContentLoaded", () => {
       const taskInput = document.getElementById("task-input");
       const addTaskButton = document.getElementById("add-task-btn");
       const taskList = document.getElementById("task-list");
   
       // Function to add a task
       function addTask() {
           const taskText = taskInput.value.trim();
           if (taskText === "") {
               alert("Please enter a task.");
               return;
           }
   
           const li = document.createElement("li");
   
           const taskTextNode = document.createElement("span");
           taskTextNode.textContent = taskText;
   
           const editButton = document.createElement("button");
           editButton.textContent = "Edit";
           editButton.classList.add("edit-btn");
           editButton.onclick = () => editTask(taskTextNode);
   
           const deleteButton = document.createElement("button");
           deleteButton.textContent = "Delete";
           deleteButton.classList.add("delete-btn");
           deleteButton.onclick = () => deleteTask(li);
   
           li.appendChild(taskTextNode);
           li.appendChild(editButton);
           li.appendChild(deleteButton);
   
           taskList.appendChild(li);
           taskInput.value = ""; // Clear the input field
       }
   
       // Function to edit a task
       function editTask(taskTextNode) {
           const newTaskText = prompt("Edit your task:", taskTextNode.textContent);
           if (newTaskText !== null && newTaskText.trim() !== "") {
               taskTextNode.textContent = newTaskText.trim();
           }
       }
   
       // Function to delete a task
       function deleteTask(taskElement) {
           taskList.removeChild(taskElement);
       }
   
       // Event listener for Add Task button
       addTaskButton.addEventListener("click", addTask);
   
       // Event listener for Enter key to add a task
       taskInput.addEventListener("keypress", (e) => {
           if (e.key === "Enter") {
               addTask();
           }
       });
   });
   