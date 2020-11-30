import 'bulma/css/bulma.css'
import React from 'react'

const CoolButton = (props) => {
    return (
        <button className={props.class}>{props.name}</button>
    )
}

export default CoolButton