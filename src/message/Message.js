import React from "react";
import CoolButton from "../coolbuttom/CoolButtom";

function Message(props){
    return(
        <article className="message">
        <div className="message-header">
            <p>{props.title}</p>
           <button class="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{props.message}</div>
        </article>
    );
}

export default Message;