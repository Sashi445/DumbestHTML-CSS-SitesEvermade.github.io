// addnote button selector
const addNoteButton = document.querySelector('.add_note_button')

// input item
const todoInput = document.querySelector('.todo_input')

// container todos
const todoSection = document.querySelector('.todos')

addNoteButton.addEventListener('click', function(e){
    //prevents default actions
    e.preventDefault()
    //create element
    const newTodoItem = document.createElement('div')
    newTodoItem.classList.add('todo_item')
    //create list item
    const listItem = document.createElement('p')
    listItem.innerText = todoInput.value

    todoInput.value = ''

    //create check button
    const checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class="fas fa-check"></i>'
    checkButton.classList.add('check')
    //create trash button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash')
    
    checkButton.addEventListener('click', function(checkEvent){
        console.log('Clicked Check Button!!')
        listItem.style.textDecoration = 'line-through'
    })

    trashButton.addEventListener('click', function(deleteEvent){
        console.log('Clicked Delete Button!!')
        todoSection.removeChild(newTodoItem)
    })

    newTodoItem.appendChild(listItem)
    newTodoItem.appendChild(checkButton)
    newTodoItem.appendChild(trashButton)
    todoSection.appendChild(newTodoItem)
})



