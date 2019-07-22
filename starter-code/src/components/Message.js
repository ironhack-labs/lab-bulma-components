import React from 'react';

const Message = ({title, children}) => {
  return (
    <article class="message is-info">
      <div class="message-header">
      <p>{title}</p>
      <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">{children}</div>
    </article>

  );
}

export default Message;