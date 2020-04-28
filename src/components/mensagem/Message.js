import React from 'react';

let messageTypes = {
    isInfo: 'is-info',
    isDanger: 'is-danger',
    isLink: 'is-link',
    isWarning: 'is-warning',
    isSuccess: 'is-success',
};

const checkClasses = obj => {
    let result = "message ";
    for( let type in messageTypes){
        if(obj[type]) result = `${result} ${messageTypes[type]} `;
    }

    return result;
}

const Message = (props) => 
    <article class={checkClasses(props)}>
        <div class="message-header">
            <p>{props.title}</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            {props.children}
        </div>
    </article>

export default Message;