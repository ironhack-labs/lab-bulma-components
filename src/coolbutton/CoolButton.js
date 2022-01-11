import React from "react";
import "bulma/css/bulma.css";
import "./CoolButton.css";

const CoolButton = (props) => {
  return (
    <div>
      <button className="button">{props.children}</button>
    </div>
  );
};
export default CoolButton;
