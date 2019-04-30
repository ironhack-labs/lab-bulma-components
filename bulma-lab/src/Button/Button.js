import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div className="Btns">
      <button className={props.className}>{props.nameB} </button>
    </div>
  );
}
