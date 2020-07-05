import React from 'react';
import CoolButton from './CoolButton'
import 'bulma/css/bulma.css'

export default function Message(props) {
    return (
        <article className={props.cname}>
            <div className="message-header">
                <p>{props.title}</p>
                <CoolButton className="delete"/>
            </div>
            <div className="message-body">
                {props.text}
            </div>
        </article>
    )
}