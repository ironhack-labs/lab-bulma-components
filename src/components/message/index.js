import React from 'react';

function Message(props) {
  const classNames = ["message"];
  if(props.isDark) classNames.push("is-dark");
  if(props.isPrimary) classNames.push("is-primary");
  if(props.isLink) classNames.push("is-link");
  if(props.isInfo) classNames.push("is-info");
  if(props.isSuccess) classNames.push("is-success");
  if(props.isWarning) classNames.push("is-warning");
  if(props.isDanger) classNames.push("is-danger");

  return (
    <article className={classNames.join(' ')}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.children}
      </div>
    </article>
  );
}

export default Message;