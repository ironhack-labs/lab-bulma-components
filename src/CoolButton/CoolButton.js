import React from 'react'
import 'bulma/css/bulma.css';
import './CoolButton.css'

export default function CoolButton(prop) {
    console.log(prop)
    return (
        <div>
            <button className={prop.className}>{prop.children}</button>
        </div>
    )
}
