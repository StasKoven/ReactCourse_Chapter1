import TodoItem from './ToDoItem'

const ToDoList = ({ todos, onRemove }) => {
  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
        ))
      ) : (
        <li>No ToDos available</li>
      )}
    </ul>
  )
}

export default ToDoList
