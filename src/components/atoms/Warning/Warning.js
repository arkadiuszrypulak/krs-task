import React from "react";
import "../../../../public/assets/less/warning.less";

const Warning = ({ children, errorMessage }) => {
  return (
    <>
      {children}
      <div className="warning">{errorMessage}</div>
    </>
  );
};

export default Warning;
