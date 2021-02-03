import React from 'react'
import 'bulma/css/bulma.css'

export const CoolButton = props => 
    <React.Fragment>
    <div class='control'>
        <button class={props.class}>{props.text}</button>
    </div>
    </React.Fragment>