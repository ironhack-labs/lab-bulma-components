import React from 'react'
import 'bulma/css/bulma.css';
import './CoolButton.css'

export default function CoolButton(props) {
    return (
        <div className={props.label}>
             <button className={props.classNameForRed}>
                <a href={props.urlforRed}>{props.nameForRed}</a>
            </button>
            {/* <button className={props.classNameForGreen}>
                <a href={props.urlforGreen}>{props.nameForGreen}</a>
            </button> */}
        </div>
    )
}