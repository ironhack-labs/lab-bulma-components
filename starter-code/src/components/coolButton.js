import React, { Component } from "react";


function CoolButton(props) {
  return (
    <button type = {props.type} className = {props.className}>{props.name}</button>
  )
}

export default CoolButton;