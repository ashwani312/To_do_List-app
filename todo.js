const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function renderList () {}


// isme thoda doubt hai
function toggleTak (taskId) {
    const task = task.filter(function (task){
        return task.id === taskId;
    })
    if(task.length > 0){
        const currentTaks = task[0];

        currentTaks.done = !currentTaks.done;
        renderList();
        showNotification('Task togggle successfully')
        return
    }
}

function deleteTask (taskId) {
    const newTasks = tasks.filter(function (task){
        return task.id !== taskId;
    })
    tasks = newTasks;
    renderList()
    showNotification('task deleted succesfully');
}

function addTask (task) {
    if(task){
        tasks.push(task);
        renderList()
        showNotification('task added succesfully')
        return;
    }
    showNotification('task can not be added');
}

function showNotification(text) {
    alert(text)
}

function handleInputKeypress(e){
    if(e.key == 'Enter'){
        const text = e.target.value;
        console.log(text)
        if(!text){
            showNotification('Task cannot be empty')
            return;
        }
        const task = {
            text : text,
            id : Date.now().toString(),
            done : false

        }
        e.target.value = ``;
        addTask(task)
    }

}
addTaskInput.addEventListener('keyup', handleInputKeypress);