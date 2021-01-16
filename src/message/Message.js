import React from 'react';
import 'bulma/css/bulma.css';

function Message(props) {
    return (
        <div>
            <article className="message is-info">
                <div className="message-header">
                    <p>{props.title}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
            <div className="message-body">
                <p>{props.children}</p>
            </div>
        </article>
    </div>
    );
}

export default Message;
