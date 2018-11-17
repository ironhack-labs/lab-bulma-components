import React, { Component } from "react";
import "../public/styles/styles.css";

const CoolButton = ({ classButton, buttonName }) => (
  <button className={classButton}>{buttonName}</button>
);

export default CoolButton;
