import React from 'react';
import 'bulma/css/bulma.css';
import './Message.css'

const Message = props => {
    let classes = "message"
    props.isInfo ? classes += ' is-info' : null
    props.isSmall ? classes += ' is-small' : null
    return (
        <article className={classes}>
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