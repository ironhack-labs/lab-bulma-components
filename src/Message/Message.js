import React from 'react';
import 'bulma/css/bulma.css';

function Message(props) {
    return (
        <article className="message is-info">
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {props.content}<strong>{props.strong}</strong>

            </div>
        </article>
    )
}

export default Message
