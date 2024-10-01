import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onRemove }) => {
  return (
    <ul>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} onRemove={onRemove} />
        ))
      ) : (
        <li>No ToDos available</li>
      )}
    </ul>
  );
};

export default ToDoList;
