import React from 'react';

function Message (props){
    let className = "message"
    if (props.isInfo) {
        className+= " is-info"
    }
    if (props.isWarning) {
        className+= " is-warning"
    }
    if (props.isSuccess) {
        className+= " is-success"
    }
    return(
    <article className={className}>
    <div className="message-header">
    <p>{props.title}</p>
    <button className="delete" aria-label="delete"></button>
    </div>
    <div className="message-body">
    {props.children}
    </div>
    </article>
    )
}

export default Message;