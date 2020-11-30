import React from 'react';
import './CoolButton.css';
import 'bulma/css/bulma.css';


export default function CoolButton(props) {
    return (
         <button class={ props.className }>{ props.name }</button>
    )
}
