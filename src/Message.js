import React from 'react';
import Nav from './navbar/Nav';
import SignUp from './SignUp';


const Message = ({title, message}) => {
  return (
    <article className="message">
    <div className="message-header">
      <p>{title}</p>
      <button className="delete" aria-label="delete"></button>
    </div>
    <div className="message-body">
    {message}
    </div>
  </article>
  )
};

export default Message;