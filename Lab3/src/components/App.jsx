import { useState } from 'react';
import useTasks from '../hooks/useTasks';
import SearchBar from './SearchBar';
import ToDoList from './ToDoList';
import '../styles/App.css';

function App() {
  const { tasks, addTask, removeTask } = useTasks();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="add-task">
        <input
          type="text"
          id="new-task"
          placeholder="New Task Title"
          className="input"
        />
        <button
          className="button"
          onClick={() => {
            const taskTitle = document.getElementById('new-task').value;
            addTask(taskTitle);
            document.getElementById('new-task').value = '';
          }}
        >
          Add
        </button>
      </div>
      <ToDoList tasks={filteredTasks} removeTask={removeTask} />
    </div>
  );
}

export default App;