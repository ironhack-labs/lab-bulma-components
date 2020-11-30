import React from 'react'

export default function CoolButton(props) {
    return (
        <div>
            <button className={"button " + props.className} type={props.type}> {props.title} </button>
        </div>
    )
}