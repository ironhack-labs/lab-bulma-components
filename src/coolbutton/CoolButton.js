import React from "react";
import "bulma/css/bulma.css";

const CoolButton = (props) => {
  return (
    <div>
      <a href={props.href}>
        <button className={props.className}>{props.text}</button>
      </a>
    </div>
  );
};

export default CoolButton;
