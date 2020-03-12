import React from "react";
import "./CoolButton.css";

const CoolButton = ({ title, classes }) => {
  return (
    <>
      <button className={`button ${classes}`}>{title}</button>
    </>
  );
};

export default CoolButton;
