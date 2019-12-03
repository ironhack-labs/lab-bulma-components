import React from 'react'

function button(props) {
    return (
        <button className={props.className}>{props.text}</button>
    )
}

export default button