import 'bulma/css/bulma.css';
import './FormField.css';
import React from 'react';



export default function FormField({label, type, placeholder}) {
    return (
        <div className='field'>
            <div className="control">
                <label className="label">{label}</label>
                <input className="input is-primary" type={type} placeholder={placeholder}/>
            </div>
        </div>
    )
}
