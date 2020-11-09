import React from 'react'
import "./Coolbutton.css"


const Coolbutton = ({className, name}) => {
    return (
        <div>
            <button className={className}>{name} </button>
        </div>
    )
}


export default Coolbutton
