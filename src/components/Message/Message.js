import React from 'react';
import returnClassNames from '../../utils/classManager';
import './Message.css';

const Message = (props) => 
    <article className={`message ${returnClassNames(props)} custom-message`}>
        <div className="message-header">
            <p>{props.title}</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{props.children}</div>
    </article>


export default Message;