import React from 'react';


const message  = (props) => {
    let result ="message ";
    if(props.isInfo){
        result += "is-info";
    }else{
        result += "is-success";
    }

    return (
        <article className={result}>
        <div className="message-header">
            <p>{props.title}</p>
            <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
            {props.children}
        </div>
        </article>
    )
}


export default message;