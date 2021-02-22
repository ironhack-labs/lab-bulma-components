import React from 'react';
import 'bulma/css/bulma.css';
import './FormField.css'


const FormField = props => {
    return (
        <div className='field'>
            <label className='label'>{props.label}</label>
            <input className="input is-normal" type={props.type} placeholder={props.placeholder} />
        </div>
    );
};

export default FormField;
