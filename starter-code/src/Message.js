import React, {Component} from 'react';

const Message = props => (
  <section className="section">
    <article className={props.className}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.children}
      </div>
    </article>
  </section>
);

export default Message;