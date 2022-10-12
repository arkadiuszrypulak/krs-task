import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import Table from "../../atoms/Table/Table";
import TableBody from "../../atoms/TableBody/TableBody";
import TableTR from "../../atoms/TableTR/TableTR";
import TableHead from "../../molecules/TableHead/TableHead";
import LoadingSpinner from "../../atoms/LoadingSpinner/LoadingSpinner";

import '../../../../assets/less/index.less';

const ViewTable = () => {
  const { data, loading, error, isUpSorted, sortChangeHandler } = useFetch(
    "http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts"
  );

  return (
    <>
      <SearchBar data={data} />
      {loading && <LoadingSpinner />}
      <Table>
        <TableHead>
          <th>
            {isUpSorted && (
              <a onClick={sortChangeHandler} href="#">
                <i className="fas fa-caret-down"></i>
                Dluznik
              </a>
            )}{" "}
            {!isUpSorted && (
              <a onClick={sortChangeHandler} href="#">
                <i className="fas fa-caret-up"></i>Dluznik
              </a>
            )}
          </th>
        </TableHead>
        <TableBody>
          {data ? data.map((el) => <TableTR key={el.Id} item={el} />) : null}
        </TableBody>
      </Table>
      {error && <p>{error}</p>}
    </>
  );
};

export default ViewTable;
