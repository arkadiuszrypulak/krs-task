import React from "react";
import useFetch from "../../hooks/useFetch";
import Table from "../../atoms/Table/Table";
import TableBody from "../../atoms/TableBody/TableBody";
import TableTR from "../../atoms/TableTR/TableTR";
import TableHead from "../../molecules/TableHead/TableHead";
import LoadingSpinner from "../../atoms/LoadingSpinner/LoadingSpinner";
import useSearchBar from "../../hooks/useSearchBar";
import Warning from "../../atoms/Warning/Warning";
import SearchBar from "../../molecules/SearchBar/SearchBar";

import "../../../../public/assets/less/index.less";

const ViewTable = () => {
  const { data, loading, error, isUpSorted, sortChangeHandler } = useFetch(
    "http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts"
  );

  const { handleChange, filteredData, isVisible, searchInput, noMatchUsers } =
    useSearchBar(data);

  return (
    <div>
      <SearchBar handleChange={handleChange} searchInput={searchInput} />
      <Table>
        <TableHead
          isUpSorted={isUpSorted}
          sortChangeHandler={sortChangeHandler}
        />
        <TableBody>
          {isVisible
            ? filteredData.map((el) => <TableTR key={el.Id} item={el} />)
            : data.map((el) => <TableTR key={el.Id} item={el} />)}
        </TableBody>
      </Table>
      {loading && <LoadingSpinner />}
      {noMatchUsers ? (
        <Warning errorMessage="Blad wyszukiwania, wpisz nazwe dluznika badz NIP" />
      ) : null}
      {error && <Warning errorMessage={error} />}
    </div>
  );
};

export default ViewTable;
