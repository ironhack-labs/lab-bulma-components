import React from "react";
import "bulma/css/bulma.css";

const CoolButton = (props) => {
  return (
    <div>
      <button className={`button ${props.styles}`}>
        {props.buttonContent}
      </button>
    </div>
  );
};

export default CoolButton;
