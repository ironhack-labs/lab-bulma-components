import React from 'react';
import 'bulma/css/bulma.css';
import '../Formfield/FormField.css';

const FormField = props => {
    return (
        <div className='field'>
            <label className='label'>{props.label}</label>
            <div className='control control-form'>
                <input className='input' type={props.text} placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default FormField;