import React from 'react'
import 'bulma/css/bulma.css';
import {buttonClasses} from "../button/CoolButtonColors.js";

export const Message = props => {

    var pickedClasses = props.className + " button";
    
    Object.keys(props).forEach((prop) => {
        if (buttonClasses[prop]) {
        pickedClasses += " " + buttonClasses[prop];
        }
    });

    return (
        <div>
            <br></br>
            <article className={"message " + pickedClasses}>
                <div className="message-header">
                    <p>{props.title}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">{props.children}</div>
            </article>
        </div>
    )
}

export default Message;



