import React from "react";
import "bulma/css/bulma.css";

function Container(props) {
  return (
    <div className="container" style={{ width: "40%" }}>
      {props.children}
    </div>
  );
}

export default Container;
