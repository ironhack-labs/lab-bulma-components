import React from 'react';
import 'bulma/css/bulma.css'

export default function CoolButton(props) {

    return (
        <button className={props.className}>{props.text}</button>
    )
}