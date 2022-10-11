import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import TableTR from "../TableTR/TableTR";

const Table = () => {
  const { data, loading, error, isUpSorted, sortChangeHandler } = useFetch(
    "http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts"
  );

  return (
    <>
      {loading && <div>Loading...</div>}
      <table>
        <thead>
          <tr>
            <th>
              {isUpSorted && (
                <a onClick={sortChangeHandler} href="#">
                  <i className="fas fa-caret-down"></i>
                  Dluznikk
                </a>
              )}{" "}
              {!isUpSorted && (
                <a onClick={sortChangeHandler} href="#">
                  <i className="fas fa-caret-up"></i>Dluznik
                </a>
              )}
            </th>
            <th>NIP</th>
            <th>Kwota Zadluzenia</th>
            <th>Data powstania zobowiazania</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((el) => <TableTR key={el.Id} item={el} />)}
        </tbody>
      </table>
      {error && <p>{error}</p>}
    </>
  );
};

export default Table;
