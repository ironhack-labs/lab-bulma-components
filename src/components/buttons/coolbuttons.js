import React from "react"
import "./coolbuttons.css"

const CoolButton = props => { 
    return (
        // <button className={props.className} >{props.name}</button>

        <a className={props.className} href={props.href}>{props.name}</a>
    )
}


export default CoolButton