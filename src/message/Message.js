import React from 'react';

const Message = (props) => {
    let classString = "message"
    for (let key in props){
        if (String(key) === "className"){
            classString = classString + " " + props[key]
        } else if (String(key) !== "children" && String(key) !== "title"){
            let className = String(key)
            className = "is-" + className.charAt(2).toLowerCase() + className.slice(3); //"is-primary"
            classString = classString + " " + className
        } 
    }
    return (
        <article class={classString}>
            <div class="message-header">
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {props.children}
            </div>
        </article>
    )
}

export default Message