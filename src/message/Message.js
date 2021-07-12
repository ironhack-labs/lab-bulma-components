import React from 'react';

function Message(props) {
    let isInfo = '';

    if (props.isInfo) {
        isInfo = 'is-info';
    }

    return (
        <article class={`message ${isInfo}`}>
            <div class="message-header">
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {props.children}
            </div>
        </article>
    )
}

export default Message;