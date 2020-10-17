import React from 'react'
import "bulma/css/bulma.css";
import "./CoolButton.css"

export default function CoolButton(props) {
    return (
        <div className="CoolButton">
            <button className="button is-rounded my-class is-danger is-small">{props.children}</button>
            
        </div>
    )
}
