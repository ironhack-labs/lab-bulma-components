import React from "react";

const CoolButton = props => {
  return (
    <>
      <button className={props.className}>{props.text}</button>
    </>
  )
};

export default CoolButton;
