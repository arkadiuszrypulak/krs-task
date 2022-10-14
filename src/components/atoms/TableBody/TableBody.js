import React from "react";
import '../../../../public/assets/less/table.less'

const TableBody = ({ children }) => {
  return <tbody className="table__body">{children}</tbody>;
};

export default TableBody;
