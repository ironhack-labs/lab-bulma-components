import React, {Component} from 'react'
import 'bulma/css/bulma.css';
import "./CoolButton.css";
import {buttonClasses} from "./CoolButtonColors.js";


export const CoolButton = props => {

var pickedClasses = props.className + " button";
Object.keys(props).forEach((prop) => {
  if (buttonClasses[prop]) {
    pickedClasses += " " + buttonClasses[prop];
  }
});
return <button id="submit" className={pickedClasses}>{props.children}</button>;
};


export default CoolButton;