import React from 'react'
import 'bulma/css/bulma.css';

const FormField = props => {
    return (
        <div>
            <div className='field'>
                <label className='label'>{props.label}</label>
            </div>
            <div className='control'>
                <input className='input' placeholder={props.placeholder}>{props.input}</input>
            </div>
        </div>
    );
};

export default FormField;