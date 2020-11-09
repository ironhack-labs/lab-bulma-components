import React from 'react'
import 'bulma/css/bulma.css';

const FormField = ({label, type, placeholder}) => { return (
    <div>
        <label class='label'> {label}</label>
    <div>
        <input class='input' type={type} placeholder={placeholder}/>
    </div>
    </div>
)};

export default FormField