import React from 'react';

import './Message.css';

import mountClass from '../../utils/mountClass';

const Message = (props) => {
  return (
    <article className={`message ${mountClass(props)}`}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.children}
      </div>
    </article>
  );

};

export default Message;
