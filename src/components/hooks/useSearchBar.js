import { useState } from "react";

const useSearchBar = (data) => {
  const [searchInput, setSearchInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  let noMatchUsers;
  let touched;
  const reg = /[0-9]/;

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value.length > 0) {
      setIsVisible(true);
    } else if (e.target.value.length === 0) {
      setIsVisible(false);
    }
    setSearchInput(e.target.value);
  };

  const filteredData = data.filter((el) => {
    if (searchInput === "") {
      return el;
    } else if (el.Name.toLowerCase().includes(searchInput.toLowerCase())) {
      return el;
    } else if (searchInput.match(reg) && el.NIP.includes(searchInput)) {
      return el;
    }
    touched = true;
    noMatchUsers = false;
  });

  if (filteredData.length === 0 && touched) {
    noMatchUsers = true;
  }

  return { searchInput, isVisible, handleChange, filteredData, noMatchUsers };
};

export default useSearchBar;
