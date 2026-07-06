let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

    let input = document.getElementById("taskInput");

    if(input.value.trim() === ""){
        alert("Enter a task");
        return;
    }

    tasks.push({
        text: input.value,
        completed:false
    });

    input.value="";

    saveTasks();

    displayTasks();
}

function displayTasks(){

    let list = document.getElementById("taskList");

    list.innerHTML="";

    tasks.forEach((task,index)=>{

        let li = document.createElement("li");

        if(task.completed){
            li.classList.add("completed");
        }

        li.innerHTML=`
            <span>${task.text}</span>

            <div class="actions">

            <button onclick="completeTask(${index})">✅</button>

            <button onclick="deleteTask(${index})">🗑️</button>

            </div>
        `;

        list.appendChild(li);

    });

}

function completeTask(index){

    tasks[index].completed=!tasks[index].completed;

    saveTasks();

    displayTasks();

}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

    displayTasks();

}

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}