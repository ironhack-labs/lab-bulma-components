 
import React from 'react'

import 'bulma/css/bulma.css'

import './CoolButton.css'



const CoolButton = props => {

    return(

       <button type={props.type} className={props.className}>{props.name}</button>
           
        )
    
}


export default CoolButton

