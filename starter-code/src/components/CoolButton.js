import React from "react";

export default function CoolButton(props) {
  return (
    <div>
      <button className={props.className}>{props.children}</button>
    </div>
  );
}
