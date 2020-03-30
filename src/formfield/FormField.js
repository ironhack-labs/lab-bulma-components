import React from 'react'
import 'bulma/css/bulma.css';

 const FormField = (props) => {
    return (
        <div className='field'>
        <label className='label'>{props.label}</label>
        <div>
            <input type={props.type} placeholder = {props.placholder}/>
        </div>
           
        </div>
    )
}

export default FormField 