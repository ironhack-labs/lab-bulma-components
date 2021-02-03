import React from 'react';


export default function Coolbutton(props) {
    return (
        <button className={`button ${props.classList}`}>{props.text}</button>
    )
}
