import { useState } from "react";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (title) => {
    if (title.trim()) {
      const newTask = { id: tasks.length + 1, title };
      setTasks([...tasks, newTask]);
    }
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>ToDo List</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input"
        />
      </div>

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
            const taskTitle = document.getElementById("new-task").value;
            addTask(taskTitle);
            document.getElementById("new-task").value = "";
          }}
        >
          Add
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>
                <button className="button remove" onClick={() => removeTask(task.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
