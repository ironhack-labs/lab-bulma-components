import React from "react";

const Message = ( {className, title, children} ) => {
    return (
        <article className={`message ${className}`}>
            <div className="message-header">
                <p>{title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {children}
            </div>
        </article>
    );
};

export default Message;