import React from "react";
import "bulma/css/bulma.css";

function CoolButton(props) {
  return (
    <div>
      {/* <button className="button is-rounded my-class is-danger is-small">
        {props.text}
      </button> */}
      <button className="button is-small is-success">{props.text}</button>
    </div>
  );
}

export default CoolButton;
