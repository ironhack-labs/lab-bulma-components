import React from 'react'
import '../navbar/CoolButton.css'
import 'bulma/css/bulma.css'

const Button = (props) => {
    return (
        <div>
            <button className={props.className}> {props.children}</button>
        </div>
    )
}

export default Button