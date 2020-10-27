import React from "react";

export default function Button(props) {
  return (
    <div className="buttons">
      <button className={props.nameofclass}>{props.text}</button>
    </div>
  );
}
