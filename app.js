const writeTaskBox = document.querySelector('.write__task-box')
const taskWrappers = document.querySelectorAll('.task__wrapper')
const taskBox = document.querySelector('.task-box')
// const taskText = document.querySelectorAll('.task__text')

window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'enter') {
        completeText(e)
    }   else {
        return
    }
})

const filledTasks = []
const activeTasks = []

function completeText(event) {

    const tasks = writeTaskBox.querySelectorAll('.task')

    tasks.forEach(task => {
        const taskText = task.querySelector('.task__text')
        const textContent = taskText.value
        if (event.target.parentNode === task) {
            event.target.parentNode.textContent = textContent
            taskText.remove()
            task.style.cursor = 'grab'
            task.draggable = true
            filledTasks.push(task)
            return true
        }   else {
            return false
        }
    })
}

setInterval(() => {
    filledTasks.forEach(task => {
        task.addEventListener('dragstart', dragstart)
        task.addEventListener('dragend', dragend)
    })
}, 100)

function dragstart(e) {
    setTimeout(() => {
        e.target.remove()
    }, 1)
}

function dragend(e) {
    e.target
}

taskWrappers.forEach(wrapper => {
    wrapper.addEventListener('dragover', dragover)
    wrapper.addEventListener('dragenter', dragenter)
    wrapper.addEventListener('dragleave', dragleave)
    wrapper.addEventListener('drop', drop)
})

function dragover(e) {
    e.preventDefault()
}
function dragenter(e) {
    e.target.classList.add('active')
}
function dragleave(e) {
    e.target.classList.remove('active')
}
function drop(e) {
    for (let i = 0; i < filledTasks.length; i++) {
        e.target.append(filledTasks[i])
    }
}

function deactivateTasks() {
    const tasks = taskBox.querySelectorAll('.task')

    for (let i = 0; i < filledTasks.length; i++) {

        if (taskBox.childNodes.length > 1) {
            activeTasks.push(tasks[i])
        }
    }
    console.log(activeTasks)
}
deactivateTasks()

// function activeTasks() {
//     filledTasks.forEach(task => {

//     })

// }