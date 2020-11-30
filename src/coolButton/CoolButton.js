import React from 'react'
import 'bulma/css/bulma.css'
import './CoolButton.css'


const CoolButton = props => {

    const details = `button ${props.type} ${props.className} ${props.size} ${props.color}`

    return (
      
        <button className={details}>{props.name}</button>

    )
}



export default CoolButton