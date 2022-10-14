import React from "react";
import '../../../../public/assets/less/table.less'

const Table = ({ children }) => {
  return <table className="table">{children}</table>;
};

export default Table;
