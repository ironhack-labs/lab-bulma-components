import React from 'react'

export default function CoolButton(props) {
    return (
        <div>
            <button className={props.color}>{props.name}</button>
        </div>
    )
}
