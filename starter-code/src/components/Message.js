import React from 'react';

function Message(props) {
    return(
        <div className="columns">
            <div className="column is-two-fifths">
                <article className={`message ${props.color}`}>
                    <div className="message-header">
                        <p>{props.title}</p>
                        <button className="delete" aria-label="delete"></button>
                    </div>
                    <div className="message-body">
                        {props.children}
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Message;