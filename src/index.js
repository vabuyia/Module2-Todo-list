import _ from 'lodash';

const inp = document.getElementById('inp')
const btnElement = document.getElementById('btn')
const todolist = document.getElementById('todolist')

const list = []

//Add function
btnElement.addEventListener('click', function (event) {
  event.preventDefault()
  list.push(inp.value)
  inp.value = ''
  showList()
})

function showList() {
  todolist.innerHTML = ''
  list.forEach(function (n, i) {
    todolist.innerHTML +=
      '<li>' +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>edit</a><a onclick='deleteItem(" +
      i +
      ")'>&times</a></li>"
  })
}

//Delete function
function deleteItem(i) {
  list.splice(i, 1)
  showList()
}

//Edit function
function editItem(i) {
  var newValue = prompt('Enter a new list....')
  list.splice(i, 1, newValue)
  showList()
}
