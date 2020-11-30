import 'bulma/css/bulma.css';
import './Message.css';
import React from 'react';

const Message = props => {
    return (
        <div className="container">
            <article className="message is-info">
                <div className="message-header">
                    <p>{props.title}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    {props.text}<span>{props.span}</span>
                </div>
            </article>
        </div>
    )
}

export default Message