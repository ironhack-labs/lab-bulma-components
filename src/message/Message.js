import React from 'react';
import 'bulma/css/bulma.css';



const Message = ({children, isInfo, title }) => {
    const infoClass = isInfo ? ' is-primary' : '';
    
    return (
            <div className= 'column is-8'>
            <article className={"message is-primary"+infoClass}>
            <div className="message-header">
                <p>{title}</p>
                <button className="delete" aria-label="delete"></button>
                </div>
            <div className="message-body">
                        {children}
                </div>
            </article>
            </div>
        );
    }

export default Message;