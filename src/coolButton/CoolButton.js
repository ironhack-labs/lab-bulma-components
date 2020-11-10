import React from "react";

function CoolButton(props) {
  return (
    <button
      className={props.className}
      {..."button"}
      {...isSmall}
      {...isSuccess}
      {...isDanger}
    >
      {props.children}
    </button>
  );
}

export default CoolButton;
