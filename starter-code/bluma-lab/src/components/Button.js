import React from "react";

const CoolButton = props => {
  return (
   
    <button className={props.className}>{props.children}</button>
    
  );
};
export default CoolButton;
