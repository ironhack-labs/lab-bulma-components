import React from 'react'

function CoolButton(props) {
    return (
        <div>

            <button className={props.className}>{props.children}</button>

        </div>
    )
}

export default CoolButton
