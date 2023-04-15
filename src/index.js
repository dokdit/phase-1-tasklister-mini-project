

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    buildToDo(e.target.task.value)
    form.reset()
  })
});


function buildToDo(todo){
  let lst = document.createElement('ul')
  lst.textContent = `${todo}  `
  let btn = document.createElement('button')
  document.querySelector('#tasks').appendChild(lst)
  btn.addEventListener('click',handleDelete)
  btn.textContent = 'X'
  lst.appendChild(btn)
}

function handleDelete(e){
  e.target.parentNode.remove()
}

