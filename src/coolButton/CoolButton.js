import React from "react";

const CoolButton = (props) => {
  return <button className={props.className}>{props.data}</button>;
};

export default CoolButton;
