import React, { Fragment } from 'react';

const Message = (props) => {
  let isInfo = 'message is-info';
  
  return (
    <Fragment>
      <article className={isInfo}>
        <div className="message-header">
          <p>{props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {props.children}
        </div>
      </article>
    </Fragment>
  );
}

export default Message;