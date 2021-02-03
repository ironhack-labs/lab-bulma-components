import React from "react";
import "./Message.css";

const styleObject = {
  isSmall: "is-small",
  isInfo: "is-info",
};

export default function Message(props) {
  let classList = [];

  for (let key in styleObject){
      if (Object.keys(props).includes(key)){
          classList.push(styleObject[key]);
      }
  }

  classList = classList.join(" ");
  console.log(classList);

  return (
    <article className={`message ${classList}`}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.children}
      </div>
    </article>
  );
}
