import React from "react";
import "bulma/css/bulma.css";

const coolButton = props => {
  console.log(props);
  return (
    <button className={`button ${props.bulmaclass}`}>{props.children}</button>
  );
};


export default coolButton;
