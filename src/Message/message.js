import React from "react"

import "./message.css"


const Message = props => {
  
    let classAdd 
    props.isInfo ? classAdd = "message is-info" : classAdd = "message"
    
   
    return (

        <article className={classAdd}>
            <div className="message-header">
                {props.title}
                <button class="delete" aria-label="delete"></button>
               
            </div>
            <div className="message-body">
               {props.children}
            </div>
        </article>
    )
}

export default Message