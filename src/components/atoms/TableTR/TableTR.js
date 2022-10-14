import React from "react";
import '../../../../public/assets/less/table.less';

const TableTR = (props) => {
  return (
    <tr className="table__row">
      <td className="table__row-single">{props.item.Name}</td>
      <td className="table__row-single">{props.item.NIP}</td>
      <td className="table__row-single">{props.item.Value}</td>
      <td className="table__row-single">{props.item.date}</td>
    </tr>
  );
};

export default TableTR;
