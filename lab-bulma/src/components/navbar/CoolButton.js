import React from 'react'
import '../navbar/CoolButton.css'
import 'bulma/css/bulma.css'

const Button = (props) => {
    return (
        <button className={props.className}> {props.children}</button>
    )
}

export default Button
