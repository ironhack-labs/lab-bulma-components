import React from 'react';

const FormField = (props) => (
    <div>
    <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
        <input className="input" placeholder={props.placeholder}/>
        </div>
    </div>
    </div>
);


export default FormField;