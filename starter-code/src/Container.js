import React from 'react';
import Message from './Message';

function Container (props) {
    return(
        <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
    )
}


export default Container;