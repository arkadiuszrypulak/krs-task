import React from "react";
import "../../../../public/assets/less/table.less";

const TableHead = ({ isUpSorted, sortChangeHandler }) => {
  return (
    <thead className="table__head">
      <tr className="table__row">
        <th className="table__header">
          {isUpSorted && (
            <a onClick={sortChangeHandler} href="#">
              Dluznik
              <i className="fas fa-caret-down"></i>
            </a>
          )}{" "}
          {!isUpSorted && (
            <a onClick={sortChangeHandler} href="#">
              Dluznik
              <i className="fas fa-caret-up"></i>
            </a>
          )}
        </th>
        <th className="table__header">NIP</th>
        <th className="table__header">Kwota Zadluzenia</th>
        <th className="table__header">Data powstania zobowiazania</th>
      </tr>
    </thead>
  );
};

export default TableHead;
