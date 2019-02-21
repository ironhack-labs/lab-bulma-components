import React from 'react';

const Message = ({title, isInfo, children}) => {
    return(
        <article className={`message ${isInfo ? 'is-info': ''}`}>
            <div className="message-header">
                <p>{title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {children}
            </div>
        </article>
    )
}

export default Message;