const API_URL = 'http://YOUR_EC2_PUBLIC_IP:3000';

async function fetchTasks() {
  const res = await fetch(`${API_URL}/tasks`);
  const tasks = await res.json();
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;
    li.onclick = () => deleteTask(task._id);
    taskList.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById('taskInput');
  const title = input.value;
  await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  input.value = '';
  fetchTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
  fetchTasks();
}

fetchTasks();

