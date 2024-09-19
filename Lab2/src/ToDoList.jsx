import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, removeTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} removeTask={removeTask} />
      ))}
    </ul>
  );
}
function ToDoItem({ task, removeTask }) {
    return (
      <li>
        {task.title}
        <button onClick={() => removeTask(task.id)}>Remove</button>
      </li>
    );
  }
export default ToDoList;