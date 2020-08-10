import React from "react";
import "bulma/css/bulma.css";
import "./coolbutton.css";

const CoolButton = (props) => {
  return <button className={props.className}>{props.label}</button>;
};

export default CoolButton;
