const SearchToDo = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search ToDo"
      onChange={(e) => onSearch(e.target.value)}
    />
  )
}

export default SearchToDo
