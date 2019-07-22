import React from "react";

const CoolButton = (props) => {
  
  return (
    <button
      className={props.className}
      type={props.type}>
      {props.children}
    </button>
  );
}


export default CoolButton;
