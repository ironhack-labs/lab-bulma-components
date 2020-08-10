import React from 'react'
import './CoolButton.css'
import 'bulma/css/bulma.css';

const CoolButton = props => {
    return (
        <button className={props.className}>{props.children}</button>
    )
}

export default CoolButton