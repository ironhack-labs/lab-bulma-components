import React, {Component} from 'react';
import 'bulma/css/bulma.css';

const Message = props => {
    return (
        <article className="message is-info">
            <div className="message-header">
                <p>Info</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </div>
        </article>
    );
};

export default Message;