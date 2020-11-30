import React from "react";

const CoolButton = (props) => {
  return (
    <button className={"button " + props.className} type={props.type}>
      {props.title}
    </button>
  );
};

export default CoolButton;
