import 'bulma/css/bulma.css';
import React from 'react';

function Message(props) {
    const deleteMessage = () => {
        document.querySelector('article.message').remove();
    };

    return (
        <article className={`message ${props.style}`}>
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete" onClick={deleteMessage}></button>
            </div>
            <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </div>
        </article>
    );
}

export default Message;