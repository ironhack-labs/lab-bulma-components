import "bulma/css/bulma.css";
import React from "react";

const CoolButton = (props) => {
  return (
    <div>
      <button className={props.className}>Button 1</button>
    </div>
  );
};

export default CoolButton;
