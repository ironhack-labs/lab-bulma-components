import React from 'react'
import 'bulma/css/bulma.css'

const Coolbutton = props => {
    return (
        <div className="coolbuttons">
            <button className={props.className}>{props.text}</button>
        </div>
    )
}

export default Coolbutton