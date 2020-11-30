import "bulma/css/bulma.css";
import React from "react";

export default function CoolButton(props) {
  return (
    <button className={`button ${props.buttonClass}`} type={props.type}>
      <a href={props.href}>{props.text}</a>
    </button>
  );
}
