import React from 'react';

const Message = ({children, isInfo, title }) => {
    const infoClass = isInfo ? ' is-info' : '';

    return (
        <section className="container column is-one-quarter">
            <article className={"message"+infoClass}>
                <div className="message-header">
                    <p>{title}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    {children}
                </div>
            </article>
        </section>
    );
}

export default Message;