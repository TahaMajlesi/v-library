const Search = () => {
  return (
    <div className="w-4/12 flex">
      <input
        className="text-white w-full p-1 rounded-xl border-[1px] border-white focus:outline-0 font-mono"
        type="text"
        name="Searchbox"
        id="Searchbox"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
