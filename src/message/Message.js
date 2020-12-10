import React from 'react'

function Message(myProps) {
    let articleClass = 'message ';
    for (let i in myProps) {
        if (myProps[i] === true) {
            let propArr = i.split('')
            propArr.forEach ((elem) => elem == elem.toUpperCase() ? articleClass += '-' + elem.toLowerCase() : articleClass += elem)
        }
    }

    return (
        <article className={articleClass}>
            <div className="message-header">
                <p>{myProps.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {myProps.children}
            </div>
        </article>
    )
}

export default Message;