import React from 'react';
import 'bulma/css/bulma.css';
import { bulmaClasses } from '../helpers';

const Message = (props) => {
  const messageClasses = ['message'];

  for (let keys in props) {
    if (bulmaClasses[keys]) {
      messageClasses.push(bulmaClasses[keys])
    }
  }

  return (
    <article className={messageClasses.join(' ')}>
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className='message-body'>
        {props.children}
      </div>
    </article>
  )
}

export default Message;