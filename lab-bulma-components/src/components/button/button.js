import React from 'react'

//css
import 'bulma/css/bulma.css';
import './button.css'

const button = props => {
   const className = `button ${props.isSmall ? 'is-small' : null} ${props.isDanger ? 'is-danger' : null} ` 

    return(
        <button className={className}>{props.button}</button>
    )
}

export default button