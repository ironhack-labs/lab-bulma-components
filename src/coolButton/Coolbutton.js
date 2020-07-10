import React from 'react'

const Coolbutton = (props) => {
    return (
    <a className={props.clasesDelBoton} type={props.type} href={props.href}>{props.text}</a>
    )
}


export default Coolbutton
