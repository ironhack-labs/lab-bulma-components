import React from 'react';

const Message = ({title}) => (
  <article className="is-info message">
    <div className="message-header">
      <p>{title}</p>
      <button className="delete" aria-label="delete"></button>
    </div>
    <div className="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </div>
  </article>
)

export default Message;