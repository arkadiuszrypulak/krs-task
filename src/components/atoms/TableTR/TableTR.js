import React from "react";

const TableTR = (props) => {
  return (
    <tr>
      <td>{props.item.Name}</td>
      <td>{props.item.NIP}</td>
      <td>{props.item.Value}</td>
      <td>{props.item.date}</td>
    </tr>
  );
};

export default TableTR;
