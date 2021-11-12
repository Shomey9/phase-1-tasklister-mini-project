document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target["new-task-description"].value);
    console.log(e.target["new-task-description"].value);
    form.reset()
  })
});


function handleToDo(todo) {
  let ul = document.querySelector("#tasks");
  let li = document.createElement('li');
  let btn = document.createElement('button');

  btn.addEventListener('click', handleDelete);

  btn.textContent = 'x';
  li.textContent = `${todo} `;

  
  li.append(btn);
  console.log(li);

  ul.append(li);
}

function handleDelete(e) {
  e.target.parentNode.remove()
}