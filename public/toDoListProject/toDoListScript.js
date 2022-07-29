let list = []
let subList = []

function generateRandomColor()
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    return randomColor;
}

const ourList = document.querySelector('[data-list]')
const inputList = document.getElementById('input-text')
const addTaskButton = document.querySelector('[data-add-button]')

function creatingList() {
  if (inputList.value == "") {
    Swal.fire({
    title: 'Oops...',
    text: 'Write some task!',
  })
  return
}
  else
list.push(inputList.value)
    const mainDiv = document.createElement('div')
    const firstDiv = document.createElement('div')
    const lishka = document.createElement('li')
    const addButton = document.createElement('button')
    const deleteButton = document.createElement('button')
    const secondDiv = document.createElement('div')
    const breakLine = document.createElement('div')

    mainDiv.setAttribute("id", "main-div")
    firstDiv.setAttribute("id", "first-div")
    lishka.setAttribute("id", "lishka")
    addButton.setAttribute("id", "add-sub-task")
    deleteButton.setAttribute("id", "delete-button")
    secondDiv.setAttribute("id", "second-div")
    breakLine.setAttribute("id", "break-line")

    lishka.innerText = list[list.length-1]
    ourList.appendChild(mainDiv)
    mainDiv.appendChild(firstDiv)
    firstDiv.appendChild(lishka)
    firstDiv.appendChild(addButton)
    firstDiv.appendChild(deleteButton)
    mainDiv.appendChild(secondDiv)
    mainDiv.appendChild(breakLine)
    console.log(list)

  breakLine.style.background = generateRandomColor()

    deleteButton.addEventListener('click', e => {
      mainDiv.parentNode.removeChild(mainDiv)
    })
inputList.value = ""

addButton.addEventListener('click', e => {
  if (inputList.value == "") {
    Swal.fire({
    title: 'Oops...',
    text: 'Write some sub task!',
  })
  return
}
  else  
  subList.push(inputList.value)

        const subLishka = document.createElement('ol')
        const btn = document.createElement('button')

        subLishka.setAttribute("id", "second-lishka")
        btn.setAttribute("id", "delete-button")

        subLishka.innerText = subList[subList.length-1]
        secondDiv.appendChild(subLishka)
        secondDiv.appendChild(btn)
        console.log(subList)

        btn.addEventListener('click', e => {
            subLishka.parentNode.removeChild(subLishka)
            btn.parentNode.removeChild(btn)
        })
        inputList.value = ""
        
        
        subLishka.addEventListener('click', e => {
          subLishka.classList.toggle("completed-task")
          
        })
})
}

inputList.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    creatingList()
  } else return
})

addTaskButton.addEventListener('click', () => {
    creatingList()
})