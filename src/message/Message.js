
import React from 'react';
import './Message.css';
import 'bulma/css/bulma.css';

    
const Message = (props) => {
    return (

        <article className={props.class}>
            <div className="message-header">
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
            {props.children}</div>
        </article>
    )
};

export default Message;