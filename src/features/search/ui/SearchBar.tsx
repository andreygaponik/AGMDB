import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-600 ">
      <SearchIcon />
      <input type="text" className="outline-0" placeholder="Search movies..." />
    </div>
  )
}

export default SearchBar;