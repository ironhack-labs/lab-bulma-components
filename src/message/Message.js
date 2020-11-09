import React from 'react'
/* import Container from '../container/Container.js' */


export const Message = (props) => {

    return (
        <>
        
            <article className={'message ' + props.className}>
                <div className="message-header">
                    <p>{props.title}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    {props.children}
                </div>
            </article>
        

        </>
    )
}

export default Message