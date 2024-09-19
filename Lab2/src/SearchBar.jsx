function SearchBar({ setSearchTerm }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>🔍</button>
      </div>
    );
  }
export default SearchBar;