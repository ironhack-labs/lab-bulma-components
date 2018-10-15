import React from "react";

const message = (props) => {
    return (    
        <article className="message">
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong></p>
            </div>
        </article>
    )
}

export default message;