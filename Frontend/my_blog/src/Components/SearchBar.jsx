import { IoSearchOutline, IoFilterOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <section className="flex flex-row justify-center align-center my-4">
      <div className="relative">
        <input
          type="text"
          name="search"
          id="search"
          className="border-2 border-r-0 border-slate-300 px-10 py-1 rounded-l-lg"
          placeholder="Rechercher un article..."
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoSearchOutline className="text-gray-500" />
        </div>
      </div>
      <button className="p-2 border-2 border-slate-300  font-bold rounded-r-lg">
        <IoFilterOutline />
      </button>
    </section>
  );
};

export default SearchBar;
