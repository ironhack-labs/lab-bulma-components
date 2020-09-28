import React from "react";
import "../App.css";
import "bulma/css/bulma.css";

const CoolButton = (props) => {
  return (
    <>
      <button class={props.className}>{props.children}</button>
    </>
  );
};

export default CoolButton;
