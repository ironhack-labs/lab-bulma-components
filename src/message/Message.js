import React from 'react';
import  './Message.css';


const Message = props =>{
    let classes = 'message'
    if(props.isInfo){
        classes += ' is-info'
    }

    return (
        <article className={classes}>
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {props.children}
            </div>
         </article>

    )
}


export {Message}