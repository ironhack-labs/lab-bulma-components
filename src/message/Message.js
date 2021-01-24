import 'bulma/css/bulma.css';
import './Message.css';
import React from 'react';

function Message(props) {

    let classes = 'message';
    if(props.isInfo) {
        classes += ' is-info'
    }
    if(props.isDark) {
        classes += ' is-dark'
    }
    if(props.isPrimary) {
        classes += ' is-primary'
    }
    if(props.isLink) {
        classes += ' is-link'
    }
    if(props.isSuccess) {
        classes += ' is-success'
    }

    const deleteMsg = () => {
        document.querySelector('.message').remove();
    }

    return(
        <article className={classes}>
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete" onClick={deleteMsg}></button>
            </div>
            <div className="message-body">{props.children}</div>
        </article>
    )
}

export {Message};