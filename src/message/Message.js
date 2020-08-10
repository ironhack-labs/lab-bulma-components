import "bulma/css/bulma.css";

import React from 'react'

const Message = (props) => {
    return (
        <div className={props.className}>
        <p>{props.children}</p>
        </div>
    )
}

export default Message
