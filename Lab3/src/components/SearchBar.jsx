function SearchBar({ setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
      />
    </div>
  );
}

export default SearchBar;