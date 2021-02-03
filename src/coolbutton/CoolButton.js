import React from 'react'
import 'bulma/css/bulma.css'

export const CoolButton = props => 
    <React.Fragment>
    <div className='control'>
        <button className={props.className}>{props.text}</button>
    </div>
    </React.Fragment>