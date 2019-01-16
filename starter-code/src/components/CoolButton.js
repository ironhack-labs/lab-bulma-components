import React from "react";

const CoolButton = ({nameButton, classs}) => {
  return (
    <div>
      <button class={classs}>{nameButton}</button>
    </div>
  );
};

export default CoolButton;