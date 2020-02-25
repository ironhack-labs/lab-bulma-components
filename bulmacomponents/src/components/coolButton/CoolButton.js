import React from 'react'
import './CoolButton.css'

const CoolButton = props => {
    return (
        <>
            <span className="{props.className}">{props.name}</span>
            
        </>
    )
}

export default CoolButton