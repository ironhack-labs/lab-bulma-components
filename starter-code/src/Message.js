import React from "react";
import classnames from 'classnames';

function Message(props) {
  const { isInfo, title, children } = props;

  const strg = classnames("message", {
    "is-info": isInfo
  })

  return (
    <article className={strg}>
      <div className="message-header">
        <p>{title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {children}
      </div>
    </article>
  );
}

export default Message;
