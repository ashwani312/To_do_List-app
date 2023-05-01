const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');
function addTaskToDom(task) {
    const li = document.createElement('li');

    li.innerHTML = `
  
          <input type="checkbox" id=${task.id} data-id="12" ${task.done ? 'checked' : ''}  class="custom-checkbox">
          <label for=${task.id}>${task.text}</label>
          <img src="delete.png" class="delete" alt='delete' data-id=${task.id} />
   
    `

    taskList.append(li)
}


function renderList() {
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        addTaskToDom(tasks[i])
    }
}


// isme thoda doubt hai
function toggleTak(taskId) {
    const task = task.filter(function (task) {
        return task.id === taskId;
    })
    if (task.length > 0) {
        const currentTaks = task[0];

        currentTaks.done = !currentTaks.done;
        renderList();
        showNotification('Task togggle successfully')
        return
    }
}

function deleteTask(taskId) {
    const newTasks = tasks.filter(function (task) {
        return task.id !== taskId;
    })
    tasks = newTasks;
    renderList()
    showNotification('task deleted succesfully');
}

function addTask(task) {
    if (task) {
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

function handleInputKeypress(e) {
    if (e.key == 'Enter') {
        const text = e.target.value;
        console.log(text)
        if (!text) {
            showNotification('Task cannot be empty')
            return;
        }
        const task = {
            text: text,
            id: Date.now().toString(),
            done: false

        }
        e.target.value = ``;
        addTask(task)
    }

}
// handleClickListner
function handleClickListner(e){
  const target = e.target;
  if(target.className === 'delete'){
        const taskId = target.dataset.id;
        deleteTask()
        return
  }else if(target.className === 'custom-checkbox'){
    const taskId = target.id;
    toggleTak()
    return
  }
}

function listeners(){
    addTaskInput.addEventListener('keyup', handleInputKeypress);
    document.addEventListener('click', handleClickListner)
}

listeners()


