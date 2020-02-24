import React from "react";

function CoolButton(props) {
  const classes = {props.className} 
  return (
    <button className= {classes}>
      {props.children}
    </button>
  );
}

export default CoolButton;
