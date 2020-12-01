import "bulma/css/bulma.css";

import React from "react";

import names from "../ruleSet.js";

export default function CoolButton(props) {
  let classes = "button " + props.className + " ";
  for (let key in props) {
    console.log("keys", key);
    console.log("names[key]", names[key]);

    if (names[key]) {
      classes += names[key] + " ";
      console.log("Classes", classes);
    }
  }

  return (
    <div>
      <button className={classes}>{props.children}</button>
    </div>
  );
}
