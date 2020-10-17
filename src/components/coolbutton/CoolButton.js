import React from 'react'
import 'bulma/css/bulma.css';

export default function CoolButton(props) {
    console.log(props)
    return (
        <div className="buttons">
            <button className={`button ${props.className} ${props.isDanger} ${props.isSuccess} ${props.isPrimary} ${props.isInfo} ${props.isBlack}`}>{props.children}</button>
        </div>
    )
}
