import React from 'react';
import Message from '../message/Message'


const Container = props => {
    return (
        <article className="message is-info">
        <div className="message-header">
          <p>{props.title}</p>
          <button className="delete" aria-label="delete" />
        </div>
        <div className="message-body">
          <Message />
        </div>
      </article>
    )
}
export default Container;