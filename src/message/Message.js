import React from "react"

const Message = (props) => {
return (
    <div> 
            <article className={`message ${props.isInfo}`}>
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {props.children}
            </div>
            </article>
    </div>
)
}



export default Message;