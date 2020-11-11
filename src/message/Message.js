import React from "react";
import "bulma/css/bulma.css";

const messageColors = {
  isDark: "is-dark",
  isPrimary: "is-primary",
  isLink: "is-link",
  isInfo: "is-info",
  isSuccess: "is-success",
  isWarning: "is-warning",
  isDanger: "is-danger",
};

function Message(props) {
  function renderClassNames(props) {
    let classNames = "";
    Object.keys(props).map((key) => {
      if (messageColors[key]) {
        classNames += `${messageColors[key]} `;
      }
    });

    return classNames;
  }

  return (
    <article className={`message ${renderClassNames(props)}`}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.children}</div>
    </article>
  );
}

export default Message;
