import 'bulma/css/bulma.css'
import React from 'react'

const CoolButton = (props) => {
    return (
        <div className="Buttons">
        <button className={props.className} type={props.type}>{props.title}</button>
    </div>
    )
}

export default CoolButton