function ToDoItem({ task, removeTask }) {
    return (
      <li>
        {task.title}
        <button onClick={() => removeTask(task.id)}>Remove</button>
      </li>
    );
  }
  
  export default ToDoItem;