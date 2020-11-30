import React from 'react'
import './CoolButton.css'

export default function CoolButton(props) {
    console.log(props)
    return (
        <div>
            <button className={props.buttonClass}>{props.text}</button> 
        </div>
    )
}
