import React from "react";

const CoolButton = ({ className, isSmall, isDanger, isSuccess, children }) => {
  return (
    <button
      className={`button ${className} ${isSmall ? `is-small` : ``} ${
        isDanger ? `is-danger` : ``
      } ${isSuccess ? `is-success` : ``}`}>
      {children}
    </button>
  );
};
export default CoolButton;