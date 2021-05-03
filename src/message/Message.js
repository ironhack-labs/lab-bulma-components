import React from 'react';
import 'bulma/css/bulma.css';

const Message = (props) => {
    let text = '';
    props.children.forEach(el => {
        if(typeof el !== 'object'){
            text += el;
        } else {
            text += `<${el.type}>${el.props.children}</${el.type}>`
        }
    })
    
    return (
        <>
            <article class={`message ${props.isInfo ? "is-info" : ""}`}>
                <div class="message-header">
                    <p>{props.title}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body" dangerouslySetInnerHTML={{__html: text}}>
                {/* <div class="message-body">
                    {props.children} */}
                </div>
            </article>
        </>
    )
}
export default Message;