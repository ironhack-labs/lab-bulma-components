import React from "react";
import CoolButton from "../coolbuttom/CoolButtom";

function Message(props){
    return(
        <article className={`message 
            ${props.isDark? "is-dark":""}
            ${props.isPrimary? "is-primary":""}
             ${props.isLink? "is-link":""}
              ${props.isInfo? "is-info":""}
              ${props.isSuccess? "is-success":""}
          ${props.isWarning? "is-warning":""}
           ${props.isDanger? "is-danger":""}
        `}>
        <div className="message-header">
            <p>{props.title}</p>
           <button class="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{props.children}</div>
        </article>
    );
}

export default Message;