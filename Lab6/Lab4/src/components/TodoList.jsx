import ToDoItem from './ToDoItem'

const TodoList = ({ todos, onRemove }) => {
  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} onRemove={onRemove} />
        ))
      ) : (
        <li>No ToDos available</li>
      )}
    </ul>
  )
}

export default ToDoList
