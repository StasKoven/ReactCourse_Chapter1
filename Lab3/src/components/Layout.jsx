import AddTodo from './AddTodo'
import SearchTodo from './SearchTodo'
import ToDoList from './ToDoList'
import useTodos from '../hooks/useTodos'
const Layout = () => {
  const { todos, addTodo, removeTodo, handleSearch } = useTodos()
  return (
    <div className="layout">
      <h1>ToDo App</h1>
      <AddTodo onAdd={addTodo} />
      <SearchTodo onSearch={handleSearch} />
      <ToDoList todos={todos} onRemove={removeTodo} />
    </div>
  )
}

export default Layout
