import React from 'react'

export default function CoolButton(props) {

    let className = 'button ' + props.className

    if (props.isSmall) {
        className += 'is-small '
    }

    if (props.isDanger) {
        className += 'is-danger '
    }

    return (
        <div>
            <button className={className}>{props.name}</button>
        </div>
    )
}
