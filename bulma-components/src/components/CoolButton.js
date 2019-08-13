import React from "react";

const CoolButton = props => {
  return (
    <div>
      <button class={props.class}>{props.children}</button>
    </div>
  );
};

export default CoolButton;
