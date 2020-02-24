import React from 'react';

const Message = (props) => {
    let x = ""
    let classNames = props.className
    Object.keys(props).forEach(prop => {
        if (prop != "title" && prop != 'children') {
            x += " " + (prop.slice(0, 2) + "-" + prop.slice(2)).toLowerCase()
        }
    })
    return (
        <>
            <article class={"message" + x}>
                <div class="message-header">
                    <p>{props.title}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    {props.children}
                </div>
            </article>
        </>
    )
}

export default Message;