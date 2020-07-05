import React from 'react';
import 'bulma/css/bulma.css'

export default function Container(props) {

    return (
        <div className={props.cname}>
            {props.content}
            {props.content2}
        </div>
    )
}