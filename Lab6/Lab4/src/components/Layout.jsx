import React, { useEffect } from 'react'
import AddToDo from './AddToDo'
import SearchToDo from './SearchToDo'
import ToDoList from './ToDoList'
import useTodos from '../hooks/useTodos'
import useGetAllToDo from '../hooks/useGetAllToDo'

const Layout = () => {
  const { todos, addTodo, removeTodo, handleSearch, setTodos } = useTodos()
  const { isLoading, data, error } = useGetAllToDo()

  useEffect(() => {
    if (data) {
      setTodos(data)
    }
  }, [data, setTodos])

  return (
    <div className="layout">
      <h1>ToDo App</h1>

      {isLoading ? (
        <p>Loading ToDos...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <AddToDo onAdd={addTodo} />
          <SearchToDo onSearch={handleSearch} />
          <ToDoList todos={todos} onRemove={removeTodo} />
        </>
      )}
    </div>
  )
}

export default Layout
