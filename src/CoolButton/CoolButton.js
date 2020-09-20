import React from "react";
import "bulma/css/bulma.css";
import { getClassName } from "../utils/utils.js";

const CoolButton = (props) => {
  let resClass = "button ";

  resClass += getClassName(props);
  resClass += props["className"] + " ";

  return (
    <div>
      <button className={resClass}>{props.btnText}</button>
    </div>
  );
};

export default CoolButton;
