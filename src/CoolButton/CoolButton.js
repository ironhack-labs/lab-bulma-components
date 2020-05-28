import React from "react";
import "bulma/css/bulma.css";

function CoolButton(props) {
  return (
    <button className={props.className} type={props.submit}>
      {props.children}
    </button>
  );
}

export default CoolButton;
