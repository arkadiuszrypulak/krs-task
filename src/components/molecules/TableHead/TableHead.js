import React from "react";
import useFetch from "../../hooks/useFetch";

const TableHead = ({ children }) => {
  return (
    <thead>
      <tr>
        {children}
        <th>NIP</th>
        <th>Kwota Zadluzenia</th>
        <th>Data powstania zobowiazania</th>
      </tr>
    </thead>
  );
};

export default TableHead;
