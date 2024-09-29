const taskList = JSON.parse(localStorage.getItem('task')) || [];

const taskListElement = document.getElementById('TaskList');

function renderTasks() {
    taskListElement.innerHTML = '';
    taskList.forEach((task, index) => {
        taskListElement.innerHTML += `
        <li>
            <p style="text-decoration: ${task.completed ? 'line-through' : 'none'};">
                ${task.text}
            </p> 
            <div class="todobtn">
                <button onclick="markComplete(${index})" id="complete">
                    <span class="material-symbols-outlined">check</span>
                </button>
                <button onclick="deleteTask(${index})" id="del">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        </li>`;
    });
}

(function() {
    renderTasks();
})();

function addTask() {
    const task = document.getElementById('InputTask').value;
    if (task) {
        taskList.push({ text: task, completed: false }); 
        localStorage.setItem('task', JSON.stringify(taskList));
        document.getElementById('InputTask').value = '';  // Clear input field
    }
    renderTasks();
}

function markComplete(index) {
    taskList[index].completed = !taskList[index].completed;
    localStorage.setItem('task', JSON.stringify(taskList));  
    renderTasks();  
}

function deleteTask(index) {
    taskList.splice(index, 1);  
    localStorage.setItem('task', JSON.stringify(taskList));  
    renderTasks();
}

// const taskList = JSON.parse(localStorage.getItem('task')) || [];

// const taskListElement = document.getElementById('TaskList');

// const completedtasks = document.getElementById('complete');


// function renderTasks(){
//     taskListElement.innerHTML = '';
//     taskList.forEach((task, index) => {
//         taskListElement.innerHTML += `<li><p>${task}</P> <div class="todobtn">
//         <button id="complete"><span class="material-symbols-outlined">check</span></button>
//         <button onclick="deleteTask(${index})" id="del"><span class="material-symbols-outlined">delete</span></button>
//         </div></li>`;
//     });
// }

// (function(){
//     renderTasks();
// })();


// function addTask(){
//     const task = document.getElementById('InputTask').value;
//     // console.log(task);
//     if(task){
//         taskList.push(task);
//         localStorage.setItem('task',JSON.stringify(taskList));
//         document.getElementById('InputTask').value = '';
//     };
    
//     renderTasks();
// };

// // function markComplete(index){

// // }

// function deleteTask(index){
//     taskList.splice(index, 1);
//     localStorage.setItem('task',JSON.stringify(taskList));
//     renderTasks();
// }