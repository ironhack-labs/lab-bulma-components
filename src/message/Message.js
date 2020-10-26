import React from 'react'

export default function Message(props) {
    //avoiding undefined
    let className = 'message '
    if (props.className) className = props.className+' message '

    for(let key in props){
        // console.log(props[key])
        if (props[key] === true) {
            //Use of regex which i cannot read ://///////////////// https://regex101.com/ didnt help too much, cant read it
            className += key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase() + ' ';
        }
        // console.log(className)
    }
    return (
        <div>
            <article className={className}>
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
