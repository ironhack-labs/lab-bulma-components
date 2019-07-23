import React from 'react';
 import 'bulma/css/bulma.css';


export default function Coolbutton(props) {
    return (
        <button className={`button ${props.isSmall} ${props.isSuccess} ${props.isDanger} ${props.isRounded}`}>
            {props.children}
        </button>
    )
}


