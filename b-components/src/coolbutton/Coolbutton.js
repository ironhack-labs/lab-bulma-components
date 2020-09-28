import React from 'react'
import 'bulma/css/bulma.css'

const Coolbutton = props => {

    return (
        <>
            
            <button className={props.className}>{props.text}</button>
            
        </>
    )
}

export default Coolbutton