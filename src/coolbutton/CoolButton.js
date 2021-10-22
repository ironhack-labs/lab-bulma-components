import "bulma/css/bulma.css";
import React from "react";

// <!-- What is rendered in the DOM -->

function CoolButton(props) {
  return (
    <>
      <div>
        {/* <button className="button is-rounded my-className is-danger is-small">
        Button 1
      </button>
      <button className="button is-small is-warning">Button 2</button> */}
        <button
          className="button is-success is-primary is-danger"
          style={{ background: props.color }}
        >
          {props.text}
        </button>
      </div>
    </>
  );
}

export default CoolButton;
