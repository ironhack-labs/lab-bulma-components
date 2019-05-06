import React from "react";
import "./App.css";

const CoolButton = (props) => {
  return (
    <div className="coolbtn">
      <a class="button is-normal is-primary is-rounded is-hovered"><span>{props.name}</span></a>
      <a class="button is-medium is-danger is-hovered is-outlined"><span>Button2</span></a>
    </div>
  );
}

export default CoolButton;