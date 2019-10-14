import React from 'react';

const Message = (props) => {
    let classes = {
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isInfo: 'is-info',
        isLink: 'is-link',
        isPrimary: 'is-primary',
        isSuccess: 'is-success',
        isWarning: 'is-warning',
    };
    let classesResult = ["message"];
    Object.keys(props).forEach(elem => {
        if(classes.hasOwnProperty(elem)) classesResult.push(classes[elem]);
    });
    return (
        <div className="container">
            <article className={classesResult.join(" ")}>
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">{props.children}</div>
            </article>
        </div>
    )
}

export default Message;