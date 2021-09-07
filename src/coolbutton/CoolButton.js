import React from 'react'

export default function CoolButton(props) {
    return (
        <div>
            <button className="button is-small is-success">{props.text}</button>
        </div>
    )
}
