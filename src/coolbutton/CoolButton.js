import React from "react";
import "bulma/css/bulma.css";

function CoolButton(props) {
  return (
    <div>
      <button className={props.className}>{props.children}</button>
    </div>
  );
}

export default CoolButton;
