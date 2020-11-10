import React from 'react';
import 'bulma/css/bulma.css';

function Message(){
    return(
        <article style={{width:"30rem",paddingTop:"40px"}} className="message is-info">
            <div className="message-header">
                <p>Hello World</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
            </div>
        </article>
    )
};

export default Message;