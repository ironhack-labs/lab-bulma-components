import React from 'react'
import './coolButton.css'

const CoolButton= props=>{
    return(
        <>
            <button className={"button is-small " + props.type}>{props.name}</button>

        </>
    )
}

export default CoolButton