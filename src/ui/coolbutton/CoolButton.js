import React from "react";
import "bulma/css/bulma.css";

const CoolButton = ({ classtype, text }) => {
  return <button className={classtype}>{text}</button>;
};

export default CoolButton;
