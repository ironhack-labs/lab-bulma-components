import React from "react";

const message = props => {
  let messageClass = ["message"];
  if (props.isInfo) messageClass.push("is-info");

  return (
    <article class={messageClass.join(" ")}>
      <div class="message-header">
        <p>{props.title}</p>
        <button class="delete" aria-label="delete" />
      </div>
      <div class="message-body">{props.children}</div>
    </article>
  );
};

export default message;
