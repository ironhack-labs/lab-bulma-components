import React from 'react'



const Message = props => {
  return (
    <article class="message">
      <div class="message-header">
        <p>{props.data.title}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">{props.data.text}</div>
    </article>
  );
};

export default Message
