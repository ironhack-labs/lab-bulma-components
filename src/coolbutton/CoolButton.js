import React from 'react'
import 'bulma/css/bulma.css';

const CoolButton = props => {

    console.log('class name list', props.className)
    
   
return ( 
        <div>
            <button className='is-small'>{props.ButtonName}</button>
        </div>
)}

export default CoolButton