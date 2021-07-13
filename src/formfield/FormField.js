import React from 'react';
import './Formfield.css'

function FormField(props) {
    return (
        <div className='container'>
            <div className='field'>
                <label className='label'>{props.label}</label>
                <input type="input" type={props.email} placeholder={props.placeholder}/> 
            </div>
        </div>
    )
}

export default FormField;