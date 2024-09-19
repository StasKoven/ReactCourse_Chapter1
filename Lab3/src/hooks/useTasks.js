import { useState } from 'react';

function useTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    if (title.trim()) {
      const newTask = { id: Date.now(), title };
      setTasks([...tasks, newTask]);
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, removeTask };
}

export default useTasks;