import React from 'react';
import './CoolButton.css';
import 'bulma/css/bulma.css'

function CoolButton({isPressed, name}){

    return(
        <div>
        <button className={`${isPressed ? "button is-small is-success" : "button is-rounded my-class is-danger is-small" }`}>{name}</button>
        </div>
    )
}


export default CoolButton;


{/* <div>
        <button class="button is-rounded my-class is-danger is-small">Button 1</button>
        <button class="button is-small is-success">Button 2</button>
        </div> */}