import React, { Fragment } from 'react';

const Message = ({ isInfo, title, children }) => {
  isInfo = 'message is-info';
  return (
    <Fragment>
      <article className={isInfo}>
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {children}
        </div>
      </article>
    </Fragment>
  );
}

export default Message;