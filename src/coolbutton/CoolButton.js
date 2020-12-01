import React from "react";
import "bulma/css/bulma.css";

function CoolButton(props) {
  return (
    <div>
      <button className={props.class}>{props.name}</button>
    </div>
  );
}

export default CoolButton;
