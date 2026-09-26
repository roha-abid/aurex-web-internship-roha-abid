// Ledger — Task Manager
// Vanilla JS: DOM manipulation, events, forms, localStorage

const STORAGE_KEY = 'ledger.tasks';

// State
let tasks = [];
let currentFilter = 'all'; // 'all' | 'active' | 'completed'

// DOM references
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const formError = document.getElementById('form-error');
const list = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const filterButtons = document.querySelectorAll('.filter-btn');
const countAll = document.getElementById('count-all');
const countActive = document.getElementById('count-active');
const countCompleted = document.getElementById('count-completed');

// localStorage helpers 
function loadTasks() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Could not parse stored tasks, starting fresh.', err);
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Utilities 
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function getFilteredTasks() {
  if (currentFilter === 'active') return tasks.filter(t => !t.completed);
  if (currentFilter === 'completed') return tasks.filter(t => t.completed);
  return tasks;
}

//  Rendering 
function render() {
  list.innerHTML = '';

  const filtered = getFilteredTasks();
  emptyState.classList.toggle('is-visible', filtered.length === 0);

  filtered.forEach(task => {
    list.appendChild(buildTaskElement(task));
  });

  updateCounts();
}

function updateCounts() {
  countAll.textContent = tasks.length;
  countActive.textContent = tasks.filter(t => !t.completed).length;
  countCompleted.textContent = tasks.filter(t => t.completed).length;
}

function buildTaskElement(task) {
  const li = document.createElement('li');
  li.className = 'task-item' + (task.completed ? ' is-complete' : '');
  li.dataset.id = task.id;

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-check';
  checkbox.checked = task.completed;
  checkbox.setAttribute('aria-label', 'Mark task complete');
  checkbox.addEventListener('change', () => toggleComplete(task.id));

  // Body (text or edit input)
  const body = document.createElement('div');
  body.className = 'task-body';

  const textEl = document.createElement('p');
  textEl.className = 'task-text';
  textEl.textContent = task.text;
  body.appendChild(textEl);

  // Actions
  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const editBtn = document.createElement('button');
  editBtn.type = 'button';
  editBtn.className = 'icon-btn';
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => startEdit(li, task, body));

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'icon-btn danger';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => deleteTask(task.id));

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(checkbox);
  li.appendChild(body);
  li.appendChild(actions);

  return li;
}

function startEdit(li, task, body) {
  body.innerHTML = '';

  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.className = 'task-edit-input';
  editInput.value = task.text;
  editInput.maxLength = 120;
  body.appendChild(editInput);
  editInput.focus();
  editInput.setSelectionRange(editInput.value.length, editInput.value.length);

  function commit() {
    const newText = editInput.value.trim();
    if (newText.length > 0) {
      editTask(task.id, newText);
    } else {
      render(); // revert if left empty
    }
  }

  editInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commit();
    } else if (e.key === 'Escape') {
      render();
    }
  });

  editInput.addEventListener('blur', commit);
}

// CRUD operations
function addTask(text) {
  tasks.unshift({
    id: generateId(),
    text,
    completed: false,
    createdAt: new Date().toISOString()
  });
  saveTasks();
  render();
}

function editTask(id, newText) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.text = newText;
    saveTasks();
    render();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  render();
}

function toggleComplete(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    render();
  }
}

//  Form handling & validation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value.trim();

  if (value.length === 0) {
    formError.textContent = 'Type something before adding a task.';
    input.focus();
    return;
  }

  if (value.length > 120) {
    formError.textContent = 'Keep tasks under 120 characters.';
    return;
  }

  formError.textContent = '';
  addTask(value);
  input.value = '';
  input.focus();
});

input.addEventListener('input', () => {
  if (formError.textContent) formError.textContent = '';
});

//  Filter handling 
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    currentFilter = btn.dataset.filter;
    render();
  });
});

//  Init
tasks = loadTasks();
render();
