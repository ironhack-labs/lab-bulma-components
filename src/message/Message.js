import React from 'react';
import 'bulma/css/bulma.css';

const Message = props => {

    return (

        <article className="message is-info">
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {props.message} <strong>{props.strong}</strong>
            </div>
        </article>

    )

}


export default Message;