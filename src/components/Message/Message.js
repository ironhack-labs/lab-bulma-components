import React from 'react';
import './Message.css';

import mountClassStringFromProps from '../../utils/mountClassStringFromProps';

const Message = (props) => {

    return(
        <article className= {`message ${mountClassStringFromProps(props)}`}>
        <div className="message-header">
            <p>{props.header}</p>
            <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
            {props.body}    
        </div>
        </article>
    );
};

export default Message;