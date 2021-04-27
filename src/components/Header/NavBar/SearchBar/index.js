import { useState } from "react";
import { ReactComponent as SearchIcon } from "./../../../../assets/images/loupe.svg";
import { useHistory } from "react-router-dom";
import useStore from "../../../../store/useStore";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const history = useHistory();
  const showModal = useStore((state) => state.showModal);

  const inputChange = (e) => {
    setSearchInput(e.target.value);
    showModal(null);
  };

  const searchProduct = (e) => {
    e.preventDefault();
    if (searchInput.length === 0) {
      showModal("Enter a product name to search for!");
    } else {
      history.push(`/products/search?keyword=${searchInput}`);
    }
  };

  return (
    <form action="" className="h-10 flex">
      <input
        className="h-full w-full border-gray-300 border-2 focus:outline-none rounded-sm px-2 focus:border-gray-400"
        type="text"
        placeholder="Search for a product..."
        value={searchInput}
        onChange={inputChange}
      />

      <button
        className="flex justify-center items-center capitalize bg-green-400 hover:bg-green-200 px-2 py-1 ml-1 text-white rounded-sm"
        onClick={searchProduct}
      >
        search <SearchIcon className="w-5 inline-block text-white ml-1" />
      </button>
    </form>
  );
};

export default SearchBar;
//
