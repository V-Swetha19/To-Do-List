const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const li = document.createElement('li');
    li.innerText = todoText;
    li.addEventListener('click', toggleTodo);
    todoList.appendChild(li);
    todoInput.value = '';
  }
}

function toggleTodo(event) {
  const li = event.target;
  li.classList.toggle('completed');
}

todoInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});
