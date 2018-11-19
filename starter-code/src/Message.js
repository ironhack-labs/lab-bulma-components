import React from 'react';

const Message = ({title}) => (
    <article className="message is-info">
        <div className="message-header">
            <p>{title}</p>
            <button className="delete" aria-label="delete"/>
        </div>
        <div className="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </div>
    </article>
);

export default Message;