import React from 'react'
import 'bulma/css/bulma.css';

let clase = ''

const Button = props => {
    

    return (
        <>
            <button class={props.className}>{props.text}</button>
        </>
    );

}


export default Button;