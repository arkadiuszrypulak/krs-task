import React, { useState } from "react";
import TableTR from "../../atoms/TableTR/TableTR";

const SearchBar = ({ data }) => {
  const [searchInput, setSearchInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);
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
  });
  return (
    <div>
      <label>
        PODAJ NIP LUB NAZWE DLUZNIKA
        <input
          type="search"
          placeholder="Search ..."
          onChange={handleChange}
          value={searchInput}
        />
        <input type="submit" onClick={() => alert(element)} value="Szukaj" />
      </label>

      <table>
        <tbody>
          {isVisible &&
            filteredData.map((item) => <TableTR key={item.Id} item={item} />)}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;
