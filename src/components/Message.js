import React from 'react';
import '../components/FormField.css';
import 'bulma/css/bulma.css';
import '../components/Message.css'

const Message = props => {
 
    return (
        <article className="message is-info">
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



export default Message