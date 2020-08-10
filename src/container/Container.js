import React from 'react'
import "bulma/css/bulma.css";
import Message from "./../message/Message";
import "./../container/Container.css";

const Container = () => {
    return (
        <div>
            <article className="message is-info">
                <div className="message-header">
                    <p>Hello World</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div>
                <Message />
                </div>
            </article>  
        </div>
    )
}

export default Container
