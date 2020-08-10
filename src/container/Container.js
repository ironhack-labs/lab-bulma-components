import React from 'react';
import "bulma/css/bulma.css";
import Message from './../message/Message';

function Container() {
    return (
        <article className="message is-info">
            <Message isInfo title='Hello World'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.</Message>
        </article>
    )
}

export default Container
