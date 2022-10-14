import React from "react";

import "../../../../public/assets/less/searchbar.less";

const SearchBar = ({ handleChange, searchInput }) => {
  return (
    <div className="searchbar">
      <div className="searchbar__container">
        <span className="searchbar__header">PODAJ NIP LUB NAZWE DLUZNIKA</span>
        <label className="searchbar__label" htmlFor="search">
          <input
            type="search"
            id="text"
            className="searchbar__input searchbar__search-input"
            autoComplete="off"
            onChange={handleChange}
            value={searchInput}
          />
          <input
            type="submit"
            className="searchbar__input searchbar__submit-input"
            value="Szukaj"
          />
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
