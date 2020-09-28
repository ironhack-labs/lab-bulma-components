import React from 'react'

import './FormField.css'
import 'bulma/css/bulma.css'

const Formfield = props =>{

    return (
    <div className="formSize">   
        <div className='field'>
            <label className='label'>{props.label}</label>
            <div className='control'> 
                <input className='input' type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
    </div>     
    )

}

export default Formfield